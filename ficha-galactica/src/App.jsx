import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
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

    useEffect(() => {
        getPeople().then(setPersonajes);
    }, []);

    useEffect(() => {
        if (!selectedUrl) return;
        setLoading(true);
        getPersonDetail(selectedUrl).then(data => {
            setDetalle(data);
            getPlanetName(data.homeworld).then(nombre => {
                setPlaneta(nombre);
                setLoading(false);
            });
        });
    }, [selectedUrl]);

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Ficha Galáctica</Typography>
            <CharacterSelect personajes={personajes} selectedUrl={selectedUrl} onChange={setSelectedUrl} />
            <CharacterPreview detalle={detalle} planeta={planeta} loading={loading} />
            {detalle && <FichaForm detalle={detalle} planeta={planeta} />}
        </Container>
    );
};

export default App;
