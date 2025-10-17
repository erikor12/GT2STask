import { useEffect, useState } from 'react';
import { Container, Typography, Grid, Backdrop, CircularProgress } from '@mui/material';
import SavedFichas from './components/SavedFichas';
import CharacterSelect from './components/CharacterSelect';
import CharacterPreview from './components/CharacterPreview';
import FichaForm from './components/FichaForm';
import { getPeople, getPersonDetail, getPlanetName } from './services/swapiService';

const App = () => {
    const [personajes, setPersonajes] = useState([]);
    const [selectedUrl, setSelectedUrl] = useState('');
    const [detalle, setDetalle] = useState(null);
    const [planeta, setPlaneta] = useState('');
    const [loading, setLoading] = useState(false);
    const [fichasGuardadas, setFichasGuardadas] = useState([]);
    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        getPeople().then(data => setPersonajes(data)).finally(() => setInitialLoading(false));
    }, []);

    useEffect(() => {
        if (!selectedUrl) return;
        setLoading(true);
        getPersonDetail(selectedUrl).then(data => {
            // include the selectedUrl so image helpers can extract the id
            setDetalle({ ...data, url: selectedUrl });
            getPlanetName(data.homeworld).then(nombre => {
                setPlaneta(nombre);
                setLoading(false);
            }).catch(() => {
                setPlaneta('Desconocido');
                setLoading(false);
            });
        }).catch(() => {
            setDetalle(null);
            setPlaneta('');
            setLoading(false);
        });
    }, [selectedUrl]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('fichasGalacticas') || '[]');
        setFichasGuardadas(stored);
    }, []);

    const handleSaveFicha = (ficha) => {
        const nuevos = [...fichasGuardadas, ficha];
        setFichasGuardadas(nuevos);
        localStorage.setItem('fichasGalacticas', JSON.stringify(nuevos));
    };

    const handleDeleteFicha = (timestamp) => {
        const nuevos = fichasGuardadas.filter(f => f.timestamp !== timestamp);
        setFichasGuardadas(nuevos);
        localStorage.setItem('fichasGalacticas', JSON.stringify(nuevos));
    };

    const handleClearFichas = () => {
        setFichasGuardadas([]);
        localStorage.removeItem('fichasGalacticas');
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" color='white' gutterBottom>Ficha Galáctica</Typography>
            <Backdrop open={initialLoading} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <CircularProgress color="inherit" />
            </Backdrop>

            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <CharacterSelect personajes={personajes} selectedUrl={selectedUrl} onChange={setSelectedUrl} />
                    <CharacterPreview detalle={detalle} planeta={planeta} loading={loading} blank={selectedUrl === '' && !initialLoading} />
                    {detalle && <FichaForm detalle={detalle} planeta={planeta} onSave={handleSaveFicha} />}
                </Grid>
                <Grid item xs={12} md={4}>
                    <SavedFichas fichas={fichasGuardadas} onDelete={handleDeleteFicha} onClear={handleClearFichas} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
