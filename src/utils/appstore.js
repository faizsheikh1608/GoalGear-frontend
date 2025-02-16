import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productReducer from './productSlice'
import Product from '../components/Product';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    product : productReducer 
  },
});

export default appStore;
