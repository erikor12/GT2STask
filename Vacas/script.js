// Variables globales
let numSquares = 6;
let colors = [];
let pickedColor;

// Elementos del DOM
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("h1");
const resetButton = document.getElementById("reset");
const modeButtons = document.querySelectorAll(".mode");

// Inicializar el juego
init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

// Configurar botones de modo (Easy / Hard)
function setupModeButtons() {
    modeButtons.forEach(button => {
        button.addEventListener("click", function () {
            modeButtons.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
            numSquares = this.textContent === "Easy" ? 3 : 6;
            reset();
        });
    });
}

// Configurar comportamiento de los cuadrados
function setupSquares() {
    squares.forEach(square => {
        square.addEventListener("click", function () {
            const clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "¡Correcto!";
                resetButton.textContent = "Jugar de nuevo?";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
            } else {
                this.style.opacity = "0";
                messageDisplay.textContent = "Intenta otra vez";
            }
        });
    });
}

// Reiniciar el juego
function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "Nuevos Colores";
    h1.style.backgroundColor = "#005187";

    squares.forEach((square, i) => {
        if (colors[i]) {
            square.style.display = "block";
            square.style.backgroundColor = colors[i];
            square.style.opacity = "1";
        } else {
            square.style.display = "none";
        }
    });
}

// Cambiar todos los cuadrados al color correcto
function changeColors(color) {
    squares.forEach(square => {
        square.style.backgroundColor = color;
        square.style.opacity = "1";
    });
}

// Elegir un color aleatorio del arreglo
function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Generar un arreglo de colores aleatorios
function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

// Generar un color RGB aleatorio
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Evento para el botón de reinicio
resetButton.addEventListener("click", reset);
