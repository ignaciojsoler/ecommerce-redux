import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '../features/cart';
import { userSlice } from '../features/user';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        user: userSlice.reducer
    }
})