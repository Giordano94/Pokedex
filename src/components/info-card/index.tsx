import { FC } from 'react';
import { PokemonAbilities } from '../../ types';

interface InfoCardProps {
  height: number;
  weight: number;
  abilities: PokemonAbilities[];
  types: string[];
}

const InfoCard: FC<InfoCardProps> = ({ height, weight, abilities, types }) => {
  return (
    <div className=" bg-purple-500 p-4 rounded-lg shadow-lg w-80">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="weight" className="block text-white font-bold">
            Weight
          </label>
          <p className="text-white">{weight}</p>
        </div>
        <div>
          <label htmlFor="height" className="block text-white font-bold">
            Height
          </label>
          <p className="text-white">{height}</p>
        </div>
        <div>
          <label htmlFor="abilities" className="block text-white font-bold">
            Abilities
          </label>
          <div className="flex flex-col">
            <p className="text-white">{abilities[0].ability.name}</p>
            <p className="text-white">{abilities[1].ability.name}</p>
          </div>
        </div>
        <div>
          <label htmlFor="types" className="block text-white font-bold">
            Types
          </label>
          <div className="flex flex-col">
            {types.map((type, index) => (
              <p key={index} className="text-white">
                {type}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
