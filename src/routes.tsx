import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home-page';
import DetailsPage from './pages/details';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokemon/:id',
    element: <DetailsPage />,
  },
]);
