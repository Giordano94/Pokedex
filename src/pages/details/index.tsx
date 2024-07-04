import { FC } from 'react';
import PokemonDetails from '../../components/pokemon-details';

interface DetailsPageProps {}

const DetailsPage: FC<DetailsPageProps> = () => {
  return (
    <div>
      <PokemonDetails />
    </div>
  );
};

export default DetailsPage;
