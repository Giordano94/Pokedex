import { FC } from 'react';
import pokemonLogo from '/public/images/pokemon-logo.png';
import SearchInput from '../search-input';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  onSearchChange?: (value: string) => void;
}

const Header: FC<HeaderProps> = ({ onSearchChange }) => {
  const location = useLocation();
  const isPokemonRoute = location.pathname.includes('/pokemon/');

  return (
    <header
      className={`bg-purple-600 flex items-center h-28 ${
        isPokemonRoute
          ? 'justify-center'
          : ' justify-between fixed left-0 right-0 z-50'
      }`}
    >
      <img
        className={`w-64 ${isPokemonRoute ? '' : 'hidden md:block'} `}
        src={pokemonLogo}
        alt="pokemon-logo"
      />
      {!isPokemonRoute && (
        <div className="mt-6 flex-grow md:flex-grow-0">
          <SearchInput onChange={onSearchChange ? onSearchChange : () => {}} />
        </div>
      )}
    </header>
  );
};

export default Header;
