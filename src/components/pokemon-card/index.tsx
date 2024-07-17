import { FC, useMemo } from 'react';
import { formatPokemonId } from '../../utils/format-pokemon-id';
import { typeColors } from '../../utils/type-colors';
import { Link } from 'react-router-dom';

interface PokemonCardProps {
  image: string;
  id: number;
  name: string;
  types: string[];
}

const PokemonCard: FC<PokemonCardProps> = ({ image, id, name, types }) => {
  const renderBadges = useMemo(() => {
    return types.map((type, index) => (
      <span
        key={index}
        className={`badge m-1 font-black px-3 py-3  ${
          typeColors[type?.toLowerCase()]
        }`}
        style={{ color: '#f2f2f2' }}
      >
        {type}
      </span>
    ));
  }, [types]);

  return (
    <Link to={`/pokemon-details/${id}`}>
      <div className="card bg-base-100 shadow-xl w-72 lg:w-64 m-4">
        <figure>
          <img src={image} alt={name} className="w-48 h-48" />
        </figure>
        <div className="card-body bg-gray-700 rounded-b-2xl">
          <p className="font-bold">{formatPokemonId(id)}</p>
          <h2 className="card-title">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
          <div>{renderBadges}</div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
