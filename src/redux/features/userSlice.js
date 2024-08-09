// features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
});

export const { login, logout, setError } = userSlice.actions;
export default userSlice.reducer;
