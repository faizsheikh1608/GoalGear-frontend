import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header';
import Category from './components/Category';
import Login from './components/Login';
import Signup from './components/Signup';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';

const Applayout = () => {
  return (
    <div className="p-0 m-0">
      <Header />
      <Category />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      {
        index: true,
        element: <Product />,
      },
      {
        path : 'product/:productId',
        element : <ProductDetails/>
      }
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<RouterProvider router={router} />);
