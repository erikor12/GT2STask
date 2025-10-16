import { type DetallePersonaje, type Planeta } from "../services/swapiService";

interface Props {
    readonly detalle: DetallePersonaje | null;
    readonly planeta: Planeta | null;
    readonly loading: boolean;
}

export default function VistaPrevia({ detalle, planeta, loading }: Readonly<Props>) {
    if (loading) return <p>Cargando...</p>;
    if (!detalle) return null;

    return (
        <div style={{ marginTop: "1rem" }}>
            <h3>Vista previa</h3>
            <p><strong>Nombre:</strong> {detalle.name}</p>
            <p><strong>Altura:</strong> {detalle.height} cm</p>
            <p><strong>Año de nacimiento:</strong> {detalle.birth_year}</p>
            {planeta && <p><strong>Planeta:</strong> {planeta.name}</p>}
        </div>
    );
}