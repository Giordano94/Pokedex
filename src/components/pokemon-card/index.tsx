import { FC, useMemo } from 'react';
import { formatPokemonId } from '../../utils/format-pokemon-id';

interface PokemonCardProps {
  image: string;
  id: number;
  name: string;
  types: string[];
}

const PokemonCard: FC<PokemonCardProps> = ({ image, id, name, types }) => {
  const renderBadges = useMemo(() => {
    return types.map((type, index) => (
      <span key={index} className="badge">
        {type}
      </span>
    ));
  }, [types]);

  return (
    <div className="card w-80 bg-base-100 shadow-xl m-4">
      <figure>
        <img src={image} alt={name} className="w-52 h-52" />
      </figure>
      <div className="card-body bg-gray-700 rounded-b-2xl">
        <p className="font-bold">{formatPokemonId(id)}</p>
        <h2 className="card-title">{name}</h2>
        <div>{renderBadges}</div>
      </div>
    </div>
  );
};

export default PokemonCard;
