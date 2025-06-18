let Nombre = prompt("Ingrese su nombre:");
let Apellido = prompt("Ingrese su apellido:");
let Edad = prompt("Ingrese su edad:");
let Aportes = prompt("Ingrese sus años de aportes");
let Genero = prompt("Ingrese su género (Masculino/Femenino):");

function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

let EdadOk = false;
let AportesOk = false;

if (Edad % 1 !== 0) {
    alert("No ingrese su edad con coma");
} else {
    EdadOk = true;
}

if (Aportes % 1 !== 0) {
    alert("No ingrese sus aportes con coma");
} else {
    AportesOk = true;
}

Nombre = capitalizeWord(Nombre);
Apellido = capitalizeWord(Apellido);
Genero = capitalizeWord(Genero);

if (EdadOk && AportesOk) {
    if (
        (Genero == "Femenino" && Edad >= 60 && Aportes >= 30) ||
        (Genero == "Masculino" && Edad >= 65 && Aportes >= 30)
    ) {
        checkJubilacion();
    } else {
        alert("Usted, " + Nombre + " " + Apellido + " no puede jubilarse");
    }
}

function checkJubilacion() {
    alert("Usted, " + Nombre + " " + Apellido + " puede jubilarse");
}