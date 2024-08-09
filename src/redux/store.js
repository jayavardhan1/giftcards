// Import the necessary modules from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the slices for each feature
import userReducer from './features/userSlice';
import cartReducer from './features/cartSlice';
// import giftCardsReducer from './features/giftCardsSlice';

// Create the Redux store with the slices
export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        // giftCards: giftCardsReducer
    },
});

// Enable Redux DevTools
export default store;
