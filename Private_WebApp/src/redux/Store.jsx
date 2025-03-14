import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../redux/slices/LoginSlice';
import homeReducer from '../redux/slices/HomeSlice';

export const store = configureStore({
    reducer: {
        Login: loginReducer,
        Home: homeReducer
    },
})