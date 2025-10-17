import { Card, CardContent, Typography, Grid, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

const CharacterPreview = ({ detalle, planeta, loading, blank }) => {
    if (blank) return (
        <Card sx={{ mb: 2 }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Skeleton variant="circular" width={40} height={40} />
                <Typography>Selecciona un personaje para ver su ficha</Typography>
            </CardContent>
        </Card>
    );

    if (loading) return <Skeleton variant="rectangular" height={120} sx={{ mb: 2 }} />;
    if (!detalle) return null;

    return (
        <Card className="card-appear" sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">{detalle.name}</Typography>
                <Grid container spacing={1} sx={{ mt: 1 }}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2">Altura: {detalle.height} cm</Typography>
                        <Typography variant="body2">Año de nacimiento: {detalle.birth_year}</Typography>
                        <Typography variant="body2">Planeta: {planeta}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CharacterPreview;

CharacterPreview.propTypes = {
    detalle: PropTypes.object,
    planeta: PropTypes.string,
    loading: PropTypes.bool,
    blank: PropTypes.bool,
};
