import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, NavLink } from 'react-router-dom';
import './index.css';
import Nav from './shared/Nav';
import Home from './pages/Home'
import Store from './pages/Storefront'
import About from './pages/About'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Store',
    element: <Store />
  },
  {
    path: '/About',
    element: <About />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router}>
    <NavLink to={'/'}>
      <Home />
    </NavLink>
    <NavLink to={'/Store'}>
      <Store />
    </NavLink>
    <NavLink to={'/About'}>
    </NavLink>
    </RouterProvider>
  </React.StrictMode>
);

