// features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: {},
    totalAmount: 0,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id, price } = action.payload;
            if (state.items[id]) {
                state.items[id].quantity += 1;
                state.items[id].totalPrice += price;
            } else {
                state.items[id] = {
                    ...action.payload,
                    quantity: 1,
                    totalPrice: price
                };
            }
            state.totalAmount += price;
        },
        removeFromCart(state, action) {
            const { id, price } = action.payload;
            const existingItem = state.items[id];
            if (existingItem) {
                state.totalAmount -= existingItem.totalPrice;
                delete state.items[id];
            }
        },
        increaseQuantity(state, action) {
            const { id, price } = action.payload;
            if (state.items[id]) {
                state.items[id].quantity += 1;
                state.items[id].totalPrice += price;
                state.totalAmount += price;
            }
        },
        decreaseQuantity(state, action) {
            const { id, price } = action.payload;
            const existingItem = state.items[id];
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= price;
                state.totalAmount -= price;
            } else if (existingItem && existingItem.quantity === 1) {
                state.totalAmount -= price;
                delete state.items[id];
            }
        },
        clearCart(state) {
            state.items = {};
            state.totalAmount = 0;
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
