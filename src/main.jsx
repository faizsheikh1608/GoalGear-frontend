
import './index.css'
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header';
import Category from './components/Category';
import Login from './components/Login';
import Signup from './components/Signup';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import { Provider, useDispatch } from 'react-redux';
import appStore from './utils/appstore';
import axios from 'axios';
import { addUser } from './utils/userSlice';
import Cart from './components/Cart';

const Applayout = () => {  

  const dispatch = useDispatch();

  const fetchUser = async() =>{
    try{
      const res = await axios.get('http://localhost:3000/profile/view',{
        withCredentials:true,
      })
      console.log(res.data)
      dispatch(addUser(res.data))
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUser();
  },[])

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
        path: 'product/:productId',
        element: <ProductDetails />,
      },
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
  {
    path : '/cart',
    element : <Cart/>
  }
]);


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);

