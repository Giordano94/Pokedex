import { FC } from 'react';
import { formatPokemonId } from '../../utils/format-pokemon-id';
import { PokemonDetails as PokemonDetailsType } from '../../ types';
import InfoCard from '../info-card';
import CharacteristicsCard from '../characteristics-card';
import Header from '../header';

interface PokemonDetailsProps {
  details: PokemonDetailsType;
}

const PokemonDetails: FC<PokemonDetailsProps> = ({ details }) => {
  const {
    name,
    id,
    sprites,
    height,
    weight,
    abilities,
    types,
    characteristics,
  } = details;

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">{`${
            name.charAt(0).toUpperCase() + name.slice(1)
          } |  Nº${formatPokemonId(id)}`}</h1>
          <img
            src={sprites.other.showdown.front_default}
            alt={name}
            className="mx-auto mb-4 h-80 w-80"
          />
          <div className="flex justify-center items-center gap-4">
            <CharacteristicsCard
              characteristics={characteristics.descriptions[7].description}
            />
            <InfoCard
              height={height}
              weight={weight}
              abilities={abilities}
              types={types.map((type) => type.type.name)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
