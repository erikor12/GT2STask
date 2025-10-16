import { type Personaje } from "../services/swapiService";

interface Props {
    readonly personajes: Personaje[];
    readonly onSelect: (url: string) => void;
}

export default function PersonajeSelect({ personajes, onSelect }: Readonly<Props>) {
    return (
        <label>
            Personaje:{' '}
            <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
                <option value="" disabled>
                    -- Elegí un personaje --
                </option>
                {personajes.map((p) => (
                    <option key={p.url} value={p.url}>
                        {p.name}
                    </option>
                ))}
            </select>
        </label>
    );
}