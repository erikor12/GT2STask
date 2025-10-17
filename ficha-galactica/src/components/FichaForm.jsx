import { useState } from 'react';
import {
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Card,
    CardContent,
    Typography,
    Grid
} from '@mui/material';
import PropTypes from 'prop-types';

const FichaForm = ({ detalle, planeta, onSave }) => {
    const [apodo, setApodo] = useState('');
    const [favorito, setFavorito] = useState(false);
    const [resumen, setResumen] = useState(null);
    

    const handleGuardar = () => {
        if (apodo.trim().length < 2) {
            alert('El apodo debe tener al menos 2 caracteres');
            return;
        }
        const ficha = {
            name: detalle.name,
            height: detalle.height,
            birth_year: detalle.birth_year,
            homeworld: planeta,
            apodo,
            favorito,
            timestamp: Date.now(),
        };
        setResumen(ficha);
    if (onSave) onSave(ficha);
    };

    return (
        <Card className="card-appear" sx={{ mt: 2 }}>
            <CardContent>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                        <Typography variant="h6">Crear ficha: {detalle.name}</Typography>
                        <Typography variant="body2">Planeta: {planeta}</Typography>
                    </Grid>
                </Grid>

                <TextField
                    label="Apodo en tu ficha"
                    fullWidth
                    value={apodo}
                    onChange={e => setApodo(e.target.value)}
                    sx={{ my: 2 }}
                />
                <FormControlLabel
                    control={<Checkbox checked={favorito} onChange={e => setFavorito(e.target.checked)} />}
                    label="¿Es tu favorito?"
                />
                <Button className="btn-animate" variant="contained" onClick={handleGuardar} sx={{ mt: 2 }}>
                    Guardar ficha
                </Button>

                {resumen && (
                    <Card sx={{ mt: 4 }}>
                        <CardContent>
                            <Typography variant="h6">Resumen de tu ficha</Typography>
                            <Typography>Nombre: {resumen.name}</Typography>
                            <Typography>Altura: {resumen.height} cm</Typography>
                            <Typography>Año de nacimiento: {resumen.birth_year}</Typography>
                            <Typography>Planeta: {resumen.homeworld}</Typography>
                            <Typography>Apodo: {resumen.apodo}</Typography>
                            <Typography>Favorito: {resumen.favorito ? 'Sí' : 'No'}</Typography>
                        </CardContent>
                    </Card>
                )}

                {/* Saved fichas are shown in the right column by App */}
            </CardContent>
        </Card>
    );
};

export default FichaForm;

FichaForm.propTypes = {
    detalle: PropTypes.object.isRequired,
    planeta: PropTypes.string,
    onSave: PropTypes.func,
};
