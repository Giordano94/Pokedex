import { FC } from 'react';
import pokemonLogo from '/public/images/pokemon-logo.png';
import SearchInput from '../search-input';

interface HeaderProps {
  onSearchChange?: (value: string) => void;
}

const Header: FC<HeaderProps> = ({ onSearchChange }) => {
  return (
    <header className="bg-purple-600 flex justify-between items-center h-28 fixed left-0 right-0 z-50">
      <img
        className="w-64 hidden md:block"
        src={pokemonLogo}
        alt="pokemon-logo"
      />
      <div className="mt-6 flex-grow md:flex-grow-0">
        <SearchInput onChange={onSearchChange ? onSearchChange : () => {}} />
      </div>
    </header>
  );
};

export default Header;
