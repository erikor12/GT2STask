document.addEventListener('DOMContentLoaded', () => {
    addToDom();
});
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
let palabraAleatoria = randomWords();
let time = 10;
let score = 0;

function randomWords() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function addToDom() {
    const wordElement = document.getElementById('randomWord');
    wordElement.textContent = palabraAleatoria;
}