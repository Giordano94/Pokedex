import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/search-input';
import { PokemonDetails } from '../../ types';
import { fetchPokemons } from '../../data/service';
import PokemonCard from '../../components/pokemon-card';

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

  const renderPokemonCard = useMemo(() => {
    return pokemonList.map((pokemon) => (
      <PokemonCard
        key={pokemon.id}
        image={pokemon.sprites.front_default}
        id={pokemon.id}
        name={pokemon.name}
        types={pokemon.types.map((type) => type.type.name)}
      />
    ));
  }, [pokemonList]);

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url(public/images/bg-home02.jpg)' }}
    >
      <Header />
      <h1 className="text-center text-2xl font-bold mb-4">
        Encontre seu Pokémon aqui
      </h1>
      <div className="flex justify-center mb-4">
        <SearchInput />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderPokemonCard}
        </div>
      </div>
    </div>
  );
};

export default Home;
