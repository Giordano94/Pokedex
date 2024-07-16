import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home-page';
import DetailsPage from './pages/details';
import Root from './pages/Root';

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
    ],
  },
]);
