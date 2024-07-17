import axios from 'axios';
import { PokemonDetails } from '../ types';

const BASE_URL = 'http://localhost:3333/pokeapi';

export const fetchPokemons = async (
  offset = 0,
  limit = 8,
  searchTerm?: string
): Promise<PokemonDetails[]> => {
  try {
    if (searchTerm) {
      const response = await axios.get(
        `${BASE_URL}/searchByName/${searchTerm}}`
      );
      const pokemons: PokemonDetails[] = response.data;

      return pokemons;
    }

    const response = await axios.get(
      `${BASE_URL}/list?offset=${offset}&limit=${limit}`
    );

    const pokemons: PokemonDetails[] = response.data;

    return pokemons;
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
      `${BASE_URL}/searchById/${pokemonId}`
    );

    const details = response.data;
    const characteristicId = details.id;
    const characteristicResponse = await axios.get(
      `${BASE_URL}/characteristics/${characteristicId}`
    );

    details.characteristics = characteristicResponse.data;

    return details;
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
    throw error;
  }
};
