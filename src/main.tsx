import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes.tsx';
import { HeaderProvider } from './context/header-contex.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderProvider>
      <RouterProvider router={routes} />
    </HeaderProvider>
  </React.StrictMode>
);
