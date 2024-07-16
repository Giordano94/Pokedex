import { FC, useEffect } from 'react';
import Header from '../../components/header';
import { Outlet, useNavigate } from 'react-router-dom';

const Root: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/pokemons');
  }, [navigate]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
