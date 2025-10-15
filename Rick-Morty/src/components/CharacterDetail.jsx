import React from "react";
import {
    DialogTitle,
    DialogContent,
    Typography,
    Button,
    Stack,
    Box,
} from "@mui/material";

function CharacterDetail({ character, onBack }) {
    return (
        <>
            <DialogTitle>{character.name}</DialogTitle>
            <DialogContent>
                <Box
                    component="img"
                    src={character.image}
                    alt={character.name}
                    sx={{ width: "100%", borderRadius: 2, mb: 2 }}
                />
                <Typography>Estado: {character.status}</Typography>
                <Typography>Especie: {character.species}</Typography>
                <Typography>Género: {character.gender}</Typography>
                <Typography>Origen: {character.origin.name}</Typography>

                <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
                    <Button variant="contained" color="primary" onClick={onBack}>
                        Cerrar
                    </Button>
                </Stack>
            </DialogContent>
        </>
    );
}

export default CharacterDetail;