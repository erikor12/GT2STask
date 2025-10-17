import { useState } from 'react'
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { Container, Typography, Dialog } from "@mui/material";

function App() {
    const [selectedCharacter, setSelectedCharacter] = useState(null)

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3" align="center" gutterBottom>
                Rick and Morty App
            </Typography>

            <CharacterList onSelectCharacter={setSelectedCharacter} />

            {/* Overlay con Dialog */}
            <Dialog
                open={Boolean(selectedCharacter)}
                onClose={() => setSelectedCharacter(null)}
                maxWidth="sm"
                fullWidth
            >
                {selectedCharacter && (
                    <CharacterDetail
                        character={selectedCharacter}
                        onBack={() => setSelectedCharacter(null)}
                    />
                )}
            </Dialog>
        </Container>

    );
}

export default App
