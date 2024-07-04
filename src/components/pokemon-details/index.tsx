import { FC } from 'react';
import { formatPokemonId } from '../../utils/format-pokemon-id';
import { PokemonDetails as PokemonDetailsType } from '../../ types';
import InfoCard from '../info-card';

interface PokemonDetailsProps {
  details: PokemonDetailsType;
}

const PokemonDetails: FC<PokemonDetailsProps> = ({ details }) => {
  const { name, id, sprites, height, weight, abilities, types } = details;

  return (
    <div>
      <h1>{`${name} Nº${formatPokemonId(id)} `}</h1>
      <img src={sprites.front_default} alt={name} />
      <InfoCard
        height={height}
        weight={weight}
        abilities={abilities}
        types={types.map((type) => type.type.name)}
      />
    </div>
  );
};

export default PokemonDetails;
