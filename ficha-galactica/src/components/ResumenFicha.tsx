interface Resumen {
    name: string;
    height: string;
    birth_year: string;
    homeworldName?: string;
    apodo: string;
    favorito: boolean;
}

interface Props {
    resumen: Resumen | null;
}

export default function ResumenFicha({ resumen }: Readonly<Props>) {
    if (!resumen) return null;

    return (
        <div style={{ marginTop: "1rem", borderTop: "1px solid #ccc" }}>
            <h3>Resumen final</h3>
            <p><strong>Nombre:</strong> {resumen.name}</p>
            <p><strong>Altura:</strong> {resumen.height} cm</p>
            <p><strong>Año de nacimiento:</strong> {resumen.birth_year}</p>
            {resumen.homeworldName && (
                <p><strong>Planeta:</strong> {resumen.homeworldName}</p>
            )}
            <p><strong>Apodo:</strong> {resumen.apodo}</p>
            <p><strong>Favorito:</strong> {resumen.favorito ? "Sí" : "No"}</p>
        </div>
    );
}