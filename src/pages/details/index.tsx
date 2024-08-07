import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PokemonDetails as PokemonDetailsType } from '../../ types';
import PokemonDetails from '../../components/pokemon-details';
import { fetchPokemonDetails } from '../../data/service';

interface DetailsPageProps {}

const DetailsPage: FC<DetailsPageProps> = () => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsType>();
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams();

  const fetchPokemonDetailsData = useCallback(async () => {
    try {
      if (id) {
        setLoading(true);
        const data = await fetchPokemonDetails(id);
        if (data) {
          setPokemonDetails(data);
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPokemonDetailsData();
  }, [fetchPokemonDetailsData]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner w-20"></span>
        </div>
      ) : (
        pokemonDetails && <PokemonDetails details={pokemonDetails} />
      )}
    </div>
  );
};

export default DetailsPage;
