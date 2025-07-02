let personas = [{ nombre: "Juan", edad: 19 }, { nombre: "Mario", edad: 22 }];

function addBirthYear(personas) {
    const currentYear = new Date().getFullYear();

    return personas.map(persona => ({
        ...persona, año: currentYear - persona.edad
    }));
}