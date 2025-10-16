import { useState } from "react";
import type { DetallePersonaje } from "../services/swapiService";

interface Props {
    readonly detalle: DetallePersonaje | null;
    readonly onGuardar: (ficha: DetallePersonaje & { apodo: string; favorito: boolean }) => void;
}

export default function FormularioFicha({ detalle, onGuardar }: Readonly<Props>) {
    const [apodo, setApodo] = useState("");
    const [favorito, setFavorito] = useState(false);

    const handleSubmit = () => {
        if (!detalle) return;
        if (apodo.trim().length < 2) {
            alert("El apodo debe tener al menos 2 caracteres");
            return;
        }
        onGuardar({ ...detalle, apodo, favorito });
    };

    if (!detalle) return null;

    return (
        <div style={{ marginTop: "1rem" }}>
            <h3>Tu ficha</h3>
            <input
                type="text"
                placeholder="Apodo en tu ficha"
                value={apodo}
                onChange={(e) => setApodo(e.target.value)}
            />
            <label style={{ marginLeft: "1rem" }}>
                <input
                    type="checkbox"
                    checked={favorito}
                    onChange={(e) => setFavorito(e.target.checked)}
                />{' '}
                ¿Es tu favorito?
            </label>
            <br />
            <button onClick={handleSubmit} style={{ marginTop: "0.5rem" }}>
                Guardar ficha
            </button>
        </div>
    );
}