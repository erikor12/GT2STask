const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];
let palabraAleatoria;
let time = 10;
let score = 0;

const wordElement = document.getElementById('randomWord');
const input = document.getElementById('text');
const timeSpan = document.getElementById('timeSpan');
const scoreElement = document.getElementById('score');
const endGameContainer = document.getElementById('end-game-container');

function randomWords() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function addToDom() {
    palabraAleatoria = randomWords();
    wordElement.textContent = palabraAleatoria;
}

function updateScore() {
    score++;
    scoreElement.textContent = score;
}

function actualizarTiempo() {
    time--;
    timeSpan.textContent = `${time}s`;

    if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
    }
}
function gameOver() {
    document.querySelector('.main').remove();
    endGameContainer.innerHTML = `
    <h1>¡Tiempo agotado!</h1>
    <p>Tu puntaje final fue: ${score}</p>
    <button onclick="location.reload()">Volver a jugar</button>`;
}

input.addEventListener('input', (e) => {
    const palabraIngresada = e.target.value;
    const randomWord = palabraAleatoria;
    if (palabraIngresada === randomWord) {
        time += 3;
        input.value = "";
        addToDom();
        updateScore();
    }
});

addToDom();
const timeInterval = setInterval(actualizarTiempo, 1000);