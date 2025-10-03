import React, { useState, ChangeEvent } from "react";
import "./Publicacion.css";

const Publicacion: React.FC = () => {
    // Estados para reacciones
    const [likes, setLikes] = useState<number>(0);
    const [funny, setFunny] = useState<number>(0);
    const [wow, setWow] = useState<number>(0);

    // Estado para animación
    const [anim, setAnim] = useState<string>("");

    // Estados para comentarios
    const [comentario, setComentario] = useState<string>("");
    const [comentarios, setComentarios] = useState<string[]>([]);
    const [error, setError] = useState<string>("");

    // Manejo de cambio en input
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setComentario(e.target.value);
    };

    // Manejo de envío de comentario
    const handleComentar = () => {
        if (comentario.trim() === "") {
            setError("⚠️ El comentario no puede estar vacío.");
            return;
        }
        if (comentario.length > 40) {
            setError("⚠️ Máximo 40 caracteres.");
            return;
        }
        setComentarios((prev) => [...prev, comentario]);
        setComentario("");
        setError("");
    };

    // Manejo de animación de emoji
    const triggerAnim = (
        type: string,
        setter: React.Dispatch<React.SetStateAction<number>>
    ) => {
        setter((prev) => prev + 1);
        setAnim(type);
        setTimeout(() => setAnim(""), 400); // limpia la animación
    };

    return (
        <div className="post">
            {/* Imagen y texto */}
            <img
                src="https://pbs.twimg.com/media/G2SXRA1bMAQol2M?format=jpg&name=900x900"
                alt="meme"
                className="post-img"
            />
            <p className="post-text">¡Mi primer post en Reactbook! 🚀</p>

            {/* Reacciones */}
            <div className="reacciones">
                <button onClick={() => triggerAnim("like", setLikes)}>
                    <span className={`emoji ${anim === "like" ? "animate" : ""}`}>👍</span>{" "}
                    {likes}
                </button>
                <button onClick={() => triggerAnim("funny", setFunny)}>
                    <span className={`emoji ${anim === "funny" ? "animate" : ""}`}>😂</span>{" "}
                    {funny}
                </button>
                <button onClick={() => triggerAnim("wow", setWow)}>
                    <span className={`emoji ${anim === "wow" ? "animate" : ""}`}>😮</span>{" "}
                    {wow}
                </button>
            </div>

            {/* Comentarios */}
            <div className="comentarios">
                <div className="comentario-input">
                    <input
                        type="text"
                        value={comentario}
                        onChange={handleChange}
                        placeholder="Escribe un comentario..."
                        maxLength={40}
                    />
                    <button onClick={handleComentar}>Comentar</button>
                </div>
                {error && <p className="error">{error}</p>}

                <ul>
                    {comentarios.map((c, i) => (
                        <li key={i}>{c}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Publicacion;