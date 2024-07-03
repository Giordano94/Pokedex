import { FC } from 'react';
import pokemonLogo from '/public/images/pokemon-logo.png';

const Header: FC = () => {
  return (
    <header className="bg-purple-600 flex items-center justify-center h-28 mb-3">
      <img className="w-64" src={pokemonLogo} alt="pokemon-logo" />
    </header>
  );
};

export default Header;
