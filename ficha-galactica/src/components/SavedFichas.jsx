import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';

const SavedFichas = ({ fichas, onDelete, onClear }) => {
    return (
        <Card className="card-appear" sx={{ ml: 2 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">Fichas guardadas</Typography>
                    <Button size="small" color="error" variant="outlined" onClick={onClear}>Limpiar</Button>
                </Box>

                {fichas.length === 0 ? (
                    <Typography sx={{ mt: 2 }} variant="body2">No hay fichas guardadas.</Typography>
                ) : (
                    fichas.slice().reverse().map(f => (
                        <Card key={f.timestamp} className="fade-in" sx={{ mt: 2, p: 1 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box>
                                        <Typography><strong>{f.name}</strong> — {f.apodo}</Typography>
                                        <Typography variant="body2">Planeta: {f.homeworld} | Altura: {f.height} | Año: {f.birth_year}</Typography>
                                        <Typography variant="caption">{new Date(f.timestamp).toLocaleString()}</Typography>
                                    </Box>
                                    <Box>
                                        <Button className="btn-animate" size="small" color="error" onClick={() => onDelete(f.timestamp)}>Eliminar</Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))
                )}
            </CardContent>
        </Card>
    );
};

export default SavedFichas;

SavedFichas.propTypes = {
    fichas: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
};
