import { FC, useCallback, useEffect, useState } from 'react';
import FavoriteCard from '../../components/favorite-card';

const FavoritePokemonPage: FC = () => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  const fetchFavoritePokemons = useCallback(async () => {
    try {
      const data = await ['dados'];
      if (data) {
        setFavoritePokemons(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    fetchFavoritePokemons();
  }, [fetchFavoritePokemons]);

  return (
    <>
      <div>
        <FavoriteCard
          image={favoritePokemons.image}
          name={favoritePokemons.name}
        />
      </div>
    </>
  );
};

export default FavoritePokemonPage;
