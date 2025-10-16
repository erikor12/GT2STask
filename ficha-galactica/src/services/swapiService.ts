export interface Personaje {
    name: string;
    url: string;
}

export interface DetallePersonaje {
    name: string;
    height: string;
    birth_year: string;
    homeworld: string;
}

export interface Planeta {
    name: string;
}

export async function fetchPersonajes(): Promise<Personaje[]> {
    const res = await fetch("https://swapi.dev/api/people/?page=1");
    const data = await res.json();
    return data.results;
}

export async function fetchDetallePersonaje(url: string): Promise<DetallePersonaje> {
    const res = await fetch(url);
    return await res.json();
}

export async function fetchPlaneta(url: string): Promise<Planeta> {
    const res = await fetch(url);
    return await res.json();
}