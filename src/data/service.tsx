import axios from 'axios';
import { Pokemon, PokemonDetails } from '../ types';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const fetchDetailedPokemons = async (
  pokemons: Pokemon[]
): Promise<PokemonDetails[]> => {
  try {
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

export const fetchPokemons = async (
  offset = 0,
  limit = 20,
  searchTerm?: string
): Promise<PokemonDetails[]> => {
  try {
    if (searchTerm) {
      const response = await axios.get(`${BASE_URL}/?limit=150}`);
      const pokemons: Pokemon[] = response.data.results;

      const detailedPokemons = fetchDetailedPokemons(pokemons);

      return detailedPokemons;
    }

    const response = await axios.get(
      `${BASE_URL}?offset=${offset}&limit=${limit}`
    );
    const pokemons: Pokemon[] = response.data.results;

    const detailedPokemons = fetchDetailedPokemons(pokemons);

    return detailedPokemons;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const fetchPokemonDetails = async (
  pokemonId: string
): Promise<PokemonDetails> => {
  try {
    const response = await axios.get<PokemonDetails>(
      `${BASE_URL}/${pokemonId}`
    );

    const details = response.data;
    const characteristicId = details.id;
    const characteristicResponse = await axios.get(
      `https://pokeapi.co/api/v2/characteristic/${characteristicId}`
    );

    details.characteristics = characteristicResponse.data;

    return details;
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
    throw error;
  }
};
