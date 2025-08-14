let calificacion = prompt("Ingrese la calificación del examen:");

alert(evaluarRendimiento(calificacion));
function evaluarRendimiento(calificacion) {
	if (calificacion < 0 || calificacion > 10) {
		return "Calificación inválida";
	} else if (calificacion <= 2) {
		return "Muy mal";
	} else if (calificacion <= 5) {
		return "Mal";
	} else if (calificacion <= 6) {
		return "Tan cerca pero tan lejos";
	} else if (calificacion <= 8) {
		return "Bien!";
	} else {
		return "Muy bien!!";
	}
}