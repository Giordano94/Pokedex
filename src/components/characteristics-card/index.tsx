import { FC } from 'react';

interface CharacteristicsCardProps {
  characteristics: string;
}

const CharacteristicsCard: FC<CharacteristicsCardProps> = ({
  characteristics,
}) => {
  return (
    <div className=" bg-yellow-400 rounded-lg h-[168px] w-80 flex justify-center items-center">
      <div>
        <label htmlFor="characteristics" className="block text-white font-bold">
          Characteristics
        </label>
        <p className="text-white">{characteristics}</p>
      </div>
    </div>
  );
};

export default CharacteristicsCard;
