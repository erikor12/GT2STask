import { Card, CardContent, Typography, CircularProgress } from '@mui/material';

const CharacterPreview = ({ detalle, planeta, loading }) => {
    if (loading) return <CircularProgress />;
    if (!detalle) return null;

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">{detalle.name}</Typography>
                <Typography>Altura: {detalle.height} cm</Typography>
                <Typography>Año de nacimiento: {detalle.birth_year}</Typography>
                <Typography>Planeta: {planeta}</Typography>
            </CardContent>
        </Card>
    );
};

export default CharacterPreview;
