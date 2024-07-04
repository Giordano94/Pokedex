import { FC } from 'react';
import { formatPokemonId } from '../../utils/format-pokemon-id';
import { PokemonDetails as PokemonDetailsType } from '../../ types';

interface PokemonDetailsProps {
  details: PokemonDetailsType;
}

const PokemonDetails: FC<PokemonDetailsProps> = ({ details }) => {
  const { name, id, sprites } = details;

  return (
    <div>
      <h1>{`${name} Nº${formatPokemonId(id)} `}</h1>
      <img src={sprites.front_default} alt={name} />
    </div>
  );
};

export default PokemonDetails;
