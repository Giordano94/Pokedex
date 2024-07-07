import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Header from '../../components/header';
import { PokemonDetails } from '../../ types';
import { fetchPokemons } from '../../data/service';
import PokemonCard from '../../components/pokemon-card';
import { useDebounce } from 'use-debounce';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home: FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonDetails[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [debouncedSearchTerm] = useDebounce(searchTerm, 700);

  const fetchPokemonsData = useCallback(
    async (offset = 0) => {
      try {
        const data = await fetchPokemons(offset, 8, debouncedSearchTerm);
        if (data) {
          setPokemonList((prevList) =>
            offset === 0 ? data : [...prevList, ...data]
          );
        }
        if (debouncedSearchTerm) {
          setPokemonList(data);
        }

        if (data.length < 8) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    [debouncedSearchTerm]
  );

  useEffect(() => {
    setPage(0);
    setHasMore(true);
    fetchPokemonsData(0);
  }, [fetchPokemonsData]);

  const fetchMoreData = useCallback(() => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPokemonsData(nextPage * 8);
  }, [page, fetchPokemonsData]);

  const renderPokemonCard = useMemo(() => {
    return pokemonList.map((pokemon) => (
      <PokemonCard
        key={pokemon.id}
        image={pokemon.sprites.other.showdown.front_default}
        id={pokemon.id}
        name={pokemon.name}
        types={pokemon.types.map((type) => type.type.name)}
      />
    ));
  }, [pokemonList]);

  return (
    <div>
      <Header onSearchChange={setSearchTerm} />
      <div className="flex flex-col items-center justify-center pt-32 px-4">
        <InfiniteScroll
          dataLength={pokemonList.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {renderPokemonCard}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;
