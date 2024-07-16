import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home-page';
import DetailsPage from './pages/details';
import Root from './pages/Root';
import FavoritePokemonPage from './pages/favorite';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'pokemons',
        element: <Home />,
      },
      {
        path: 'pokemon-details/:id',
        element: <DetailsPage />,
      },
      {
        path: 'favorite',
        element: <FavoritePokemonPage />,
      },
    ],
  },
]);
