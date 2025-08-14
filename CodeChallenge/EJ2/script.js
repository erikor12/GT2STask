let Num1 = prompt("Ingrese el primer número:");
let Num2 = prompt("Ingrese el segundo número:");
let Word = prompt("Ingrese una palabra:");

alert(biggestOne(Num1, Num2, Word));

function biggestOne(num1, num2, word) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return word[0] + word[word.length - 1];
    }
}