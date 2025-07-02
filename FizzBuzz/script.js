let fizzlimit = prompt("Ingrese el número el cual va a saltar fizz");
let buzzlimit = prompt("Ingrese el número el cual va a saltar buzz");
let maxnumber = prompt("Ingrese el número máximo a contar");

alert("El resultado va a estar en la consola, apretar F12 e ir al apartado consola.");

for (let i = 1; i <= maxnumber; i++) {
    if (i % fizzlimit == 0 && i % buzzlimit == 0) {
        console.log("fizzbuzz");
    } else if (i % fizzlimit == 0) {
        console.log("fizz");
    } else if (i % buzzlimit == 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}