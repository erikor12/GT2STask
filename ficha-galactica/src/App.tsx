import { useState, useEffect } from "react";
import {
    fetchPersonajes,
    fetchDetallePersonaje,
    fetchPlaneta,
    type Personaje,
    type DetallePersonaje,
    type Planeta,
} from "./services/swapiService";

import {
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    CircularProgress,
    Container,
} from "@mui/material";

import FormularioFicha from "./components/FormularioFicha";
import ResumenFicha from "./components/ResumenFicha";

interface Resumen extends DetallePersonaje {
    apodo: string;
    favorito: boolean;
    homeworldName?: string;
}

export default function App() {
    const [personajes, setPersonajes] = useState<Personaje[]>([]);
    const [selectedUrl, setSelectedUrl] = useState<string>("");
    const [detalle, setDetalle] = useState<DetallePersonaje | null>(null);
    const [planeta, setPlaneta] = useState<Planeta | null>(null);
    const [loading, setLoading] = useState(false);
    const [resumen, setResumen] = useState<Resumen | null>(
        () => JSON.parse(sessionStorage.getItem("ficha") || "null")
    );

    useEffect(() => {
        fetchPersonajes().then(setPersonajes).catch(console.error);
    }, []);

    useEffect(() => {
        if (!selectedUrl) return;
        setLoading(true);
        fetchDetallePersonaje(selectedUrl)
            .then(async (data) => {
                setDetalle(data);
                if (data.homeworld) {
                    const planetaData = await fetchPlaneta(data.homeworld);
                    setPlaneta(planetaData);
                }
            })
            .finally(() => setLoading(false));
    }, [selectedUrl]);

    const handleGuardar = (ficha: DetallePersonaje & { apodo: string; favorito: boolean }) => {
        const fichaConPlaneta: Resumen = {
            ...ficha,
            homeworldName: planeta?.name || "",
        };
        setResumen(fichaConPlaneta);
        sessionStorage.setItem("ficha", JSON.stringify(fichaConPlaneta));
    };

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                🌠 Fichas Galácticas
            </Typography>

            {/* Grid de tarjetas */}
            <Grid container spacing={2}>
                {personajes.map((p) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={p.url}>
                        <Card
                            variant="outlined"
                            sx={{
                                border: selectedUrl === p.url ? "2px solid #1976d2" : "1px solid #ddd",
                                transition: "0.3s",
                                "&:hover": { boxShadow: 6, transform: "scale(1.03)" },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" align="center">
                                    {p.name}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "center" }}>
                                <Button
                                    size="small"
                                    variant="contained"
                                    onClick={() => setSelectedUrl(p.url)}
                                >
                                    Ver ficha
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Vista previa */}
            {loading && (
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                    <CircularProgress />
                </div>
            )}
            {detalle && !loading && (
                <Card sx={{ mt: 4, p: 2 }}>
                    <CardContent>
                        <Typography variant="h5">Vista previa</Typography>
                        <Typography><strong>Nombre:</strong> {detalle.name}</Typography>
                        <Typography><strong>Altura:</strong> {detalle.height} cm</Typography>
                        <Typography><strong>Año de nacimiento:</strong> {detalle.birth_year}</Typography>
                        {planeta && <Typography><strong>Planeta:</strong> {planeta.name}</Typography>}
                    </CardContent>
                </Card>
            )}

            {/* Formulario */}
            <FormularioFicha detalle={detalle} onGuardar={handleGuardar} />

            {/* Resumen final */}
            <ResumenFicha resumen={resumen} />
        </Container>
    );
}