import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        username: '',
        password: '',
        confirmedPassword: ''
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setConfirmedPassword: (state, action) => {
            state.confirmedPassword = action.payload;
        }
    }
});

export const { setUsername, setPassword, setConfirmedPassword } = registerSlice.actions;
export default registerSlice.reducer;