import { FC, useMemo } from 'react';

interface PokemonCardProps {
  image: string;
  number: string;
  name: string;
  types: string[];
}

const PokemonCard: FC<PokemonCardProps> = ({ image, number, name, types }) => {
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
      <p>{number}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div>{renderBadges}</div>
      </div>
    </div>
  );
};

export default PokemonCard;
