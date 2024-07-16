import { FC } from 'react';
import pokemonLogo from '/public/images/pokemon-logo.png';
import SearchInput from '../search-input';
import { Link, useLocation } from 'react-router-dom';
import { useHeaderContext } from '../../context/header-contex';

const Header: FC = () => {
  const { setSearchTerm } = useHeaderContext();

  const location = useLocation();
  const isPokemonRoute = location.pathname.includes('/pokemon-details/');

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
      <div>
        <Link to={'/favorite'}>Favoritos</Link>
      </div>
      {!isPokemonRoute && (
        <div className="mt-6 flex-grow md:flex-grow-0">
          <SearchInput onChange={setSearchTerm} />
        </div>
      )}
    </header>
  );
};

export default Header;
