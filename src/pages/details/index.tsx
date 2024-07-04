import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PokemonDetails as PokemonDetailsType } from '../../ types';
import PokemonDetails from '../../components/pokemon-details';
import { fetchPokemonDetails } from '../../data/service';

interface DetailsPageProps {}

const DetailsPage: FC<DetailsPageProps> = () => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsType>();

  const { id } = useParams();

  const fetchPokemonDetailsData = useCallback(async () => {
    try {
      if (id) {
        const data = await fetchPokemonDetails(id);
        if (data) {
          setPokemonDetails(data);
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchPokemonDetailsData();
  }, [fetchPokemonDetailsData]);

  return (
    <div>
      <PokemonDetails />
    </div>
  );
};

export default DetailsPage;
