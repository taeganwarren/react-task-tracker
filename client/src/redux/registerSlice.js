import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        username: '',
        password: '',
        confirmedPassword: '',
        usernameError: false,
        passwordError: false,
        mismatchedPasswordsError: false
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
        },
        setUsernameError: (state, action) => {
            state.usernameError = action.payload;
        },
        setPasswordError: (state, action) => {
            state.passwordError = action.payload;
        },
        setMismatchedPasswordsError: (state, action) => {
            state.mismatchedPasswordsError = action.payload;
        }
    }
});

export const { setUsername, setPassword, setConfirmedPassword, setUsernameError, setPasswordError, setMismatchedPasswordsError } = registerSlice.actions;
export default registerSlice.reducer;