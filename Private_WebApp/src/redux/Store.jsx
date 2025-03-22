import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from '../redux/slices/LoadingSlice';
import modalReducer from '../redux/slices/ModalSlice';
import loginReducer from '../redux/slices/LoginSlice';
import homeReducer from '../redux/slices/HomeSlice';
import goldReducer from '../redux/slices/GoldSlice';
import userReducer from '../redux/slices/UserSlice'

export const store = configureStore({
    reducer: {
        Loading: loadingReducer,
        Modal: modalReducer,
        Login: loginReducer,
        Home: homeReducer,
        Gold: goldReducer,
        User: userReducer
    },
})