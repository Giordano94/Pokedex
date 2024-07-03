import { FC } from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/search-input';

const Home: FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-bold mb-4">
          Encontre seu Pokémon aqui
        </h1>
        <SearchInput />
      </div>
    </div>
  );
};

export default Home;
