import React, { useEffect, useState } from "react";
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
    Pagination,
    Stack,
} from "@mui/material";

function CharacterList({ onSelectCharacter }) {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.results);
                setTotalPages(data.info.pages);
            });
    }, [page]);

    return (
        <>
            <Grid container spacing={3}>
                {characters.map((char) => (
                    <Grid item xs={12} sm={6} md={4} key={char.id}>
                        <Card sx={{ height: "100%" }}>
                            <CardActionArea onClick={() => onSelectCharacter(char)}>
                                <CardMedia
                                    component="img"
                                    height="220"
                                    image={char.image}
                                    alt={char.name}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {char.name}
                                    </Typography>
                                    <Typography variant="body2">{char.species}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(e, value) => setPage(value)}
                    color="primary"
                    size="large"
                />
            </Stack>
        </>
    );
}

export default CharacterList;