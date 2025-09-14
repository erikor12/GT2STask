CREATE DATABASE Pokemon
go
use Pokemon
go

CREATE TABLE Pokemons (
Id INT PRIMARY KEY,
Nombre VARCHAR(50),
Tipo VARCHAR(50),
FechaCaptura DATE,
Legendario BIT,
Nivel INT
)

INSERT INTO Pokemons (Id, Nombre, Tipo, FechaCaptura, Legendario, Nivel) Values
(1,	'Pikachu', 'Electrico', '2025-08-18', 0, 25),
(2, 'Charmander', 'Fuego', '2025-08-18', 0, 15),
(3, 'Squirtle', 'Agua', '2025-08-18', 0, 15),
(4, 'Bulbasaur', 'Planta', '2025-08-19', 0, 15),
(5, 'Eevee', 'Normal', '2025-08-19', 0, 20),
(6, 'Snorlax', 'Normal', '2025-08-20', 0, 35),
(7, 'Gengar', 'Fantasma', '2025-08-20', 0, 32),
(8, 'Lucario', 'Lucha', '2025-08-20', 0, 40),
(9, 'Mewtwo', 'Psíquico', '2025-08-20', 1, 70),
(10, 'Zapdos', 'Electrico', '2025-08-20', 1, 60);

SELECT * FROM dbo.Pokemons

SELECT * FROM Pokemons WHERE Nombre LIKE 's%'

SELECT * FROM Pokemons ORDER BY Nivel DESC, Tipo ASC