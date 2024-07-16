import { FC } from 'react';
import { formatPokemonId } from '../../utils/format-pokemon-id';
import { PokemonDetails as PokemonDetailsType } from '../../ types';
import InfoCard from '../info-card';
import CharacteristicsCard from '../characteristics-card';

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
      <div className="flex justify-center items-center">
        <div className="rounded-lg bg-base-100 p-8 text-center mt-12 md:mt-24 xl:mt-32 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{`${
            name.charAt(0).toUpperCase() + name.slice(1)
          } |  Nº${formatPokemonId(id)}`}</h1>
          <img
            src={sprites.other.showdown.front_default}
            alt={name}
            className="mx-auto mb-4 h-48 w-48 md:h-80 md:w-80"
          />
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
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
