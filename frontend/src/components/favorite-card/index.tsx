import { FC } from 'react';

interface FavoriteCardProps {
  image: string;
  name: string;
}

const FavoriteCard: FC<FavoriteCardProps> = ({ image, name }) => {
  return (
    <div className="flex justify-center items-center">
      <figure>
        <img src={image} alt={name} className="w-20 h-20" />
      </figure>
      <p>{name}</p>
    </div>
  );
};

export default FavoriteCard;
