import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CharacterSelect = ({ personajes, selectedUrl, onChange }) => (
    <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Personaje</InputLabel>
        <Select value={selectedUrl} label="Personaje" onChange={e => onChange(e.target.value)}>
            {personajes.map(p => (
                <MenuItem key={p.url} value={p.url}>{p.name}</MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default CharacterSelect;
