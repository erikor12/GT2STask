// Seleccionamos el body y la imagen con clase "rat"
const body = document.body;
const imagen = document.querySelector('.rat');

// Agregamos un evento mousemove al body
body.addEventListener('mousemove', (e) => {
    // Si el botón del mouse está siendo presionado
    if (e.buttons === 1) {
        // Cambiamos la propiedad top y left de la imagen
        imagen.style.top = `${e.clientY}px`;
        imagen.style.left = `${e.clientX}px`;
    }
});