import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

const CharacterSelect = ({ personajes, selectedUrl, onChange }) => (
    <FormControl
        fullWidth
        sx={{
            mb: 2,
            background: 'rgba(41, 41, 41, 1)',
            borderRadius: 1,
            px: 1,
            py: 0.5,
            '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
        }}
    >
        <InputLabel>Personaje</InputLabel>
        <Select
            value={selectedUrl}
            label="Personaje"
            onChange={e => onChange(e.target.value)}
            MenuProps={{
                PaperProps: {
                    sx: {
                        bgcolor: 'background.paper',
                        color: 'text.primary',
                        borderRadius: 1,
                        boxShadow: 6,
                    },
                },
            }}
        >
            {personajes.map(p => (
                <MenuItem key={p.url} value={p.url}>{p.name}</MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default CharacterSelect;

CharacterSelect.propTypes = {
    personajes: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })).isRequired,
    selectedUrl: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};
