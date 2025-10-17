const BASE_URL = 'https://swapi.dev/api';

export const getPeople = async () => {
    const res = await fetch(`${BASE_URL}/people/?page=1`);
    const data = await res.json();
    return data.results.map(p => ({ name: p.name, url: p.url }));
};

export const getPersonDetail = async (url) => {
    const res = await fetch(url);
    return await res.json();
};

export const getPlanetName = async (planetUrl) => {
    const res = await fetch(planetUrl);
    const data = await res.json();
    return data.name;
};

