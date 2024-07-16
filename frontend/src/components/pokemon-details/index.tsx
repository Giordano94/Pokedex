import { FC, useCallback, useState } from 'react';
import { formatPokemonId } from '../../utils/format-pokemon-id';
import { PokemonDetails as PokemonDetailsType } from '../../ types';
import InfoCard from '../info-card';
import CharacteristicsCard from '../characteristics-card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

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

  const [currentImage, setCurrentImage] = useState<string>(
    sprites.other.showdown.front_default
  );
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleToggleFavorite = useCallback(() => {
    setIsFavorite((prev) => !prev);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setCurrentImage(sprites.other.showdown.front_default);
  }, [sprites.other.showdown.front_default]);

  const handleMouseLeave = useCallback(() => {
    setCurrentImage(sprites.front_default);
  }, [sprites.front_default]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="rounded-lg bg-base-100 p-8 text-center mt-12 md:mt-24 xl:mt-32 mb-6">
          <IconButton
            onClick={handleToggleFavorite}
            className="absolute top-2 right-2 z-10 p-2 rounded-full bg-base-300 hover:bg-base-200 text-primary-500"
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{`${
            name.charAt(0).toUpperCase() + name.slice(1)
          } |  Nº${formatPokemonId(id)}`}</h1>
          <img
            src={currentImage}
            alt={name}
            className="mx-auto mb-4 h-48 w-48 md:h-80 md:w-80"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
