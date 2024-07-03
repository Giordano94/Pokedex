import { FC, useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/search-input';
import { PokemonDetails } from '../../ types';
import { fetchPokemons } from '../../data/service';

const Home: FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonDetails[]>([]);

  const fetchPokemonsData = useCallback(async () => {
    try {
      const data = await fetchPokemons();
      if (data) {
        setPokemonList(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    fetchPokemonsData();
  }, [fetchPokemonsData]);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-bold mb-4">
          Encontre seu Pokémon aqui
        </h1>
        <SearchInput />
      </div>
    </div>
  );
};

export default Home;
