import { createSlice } from '@reduxjs/toolkit';

export const addTaskButtonSlice = createSlice({
    name: 'addTaskButton',
    initialState: {
        value: false
    },
    reducers: {
        toggle: (state) => {
            state.value = !(state.value);
        }
    }
});

export const { toggle } = addTaskButtonSlice.actions;
export default addTaskButtonSlice.reducer;