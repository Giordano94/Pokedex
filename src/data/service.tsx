import axios from 'axios';
import { Pokemon, PokemonDetails } from '../ types';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemons = async (
  searchTerm?: string
): Promise<PokemonDetails[]> => {
  try {
    if (searchTerm) {
      const response = await axios.get<PokemonDetails>(
        `${BASE_URL}/${searchTerm.toLowerCase()}`
      );
      return [response.data];
    }

    const response = await axios.get(`${BASE_URL}?limit=151`);
    const pokemons: Pokemon[] = response.data.results;

    const detailedPokemons = await Promise.all(
      pokemons.map(async (pokemon) => {
        const pokemonDetail = await axios.get<PokemonDetails>(pokemon.url);
        return pokemonDetail.data;
      })
    );

    return detailedPokemons;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
