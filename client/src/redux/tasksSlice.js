import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        createTask: (state, action) => {
            state.tasks = [ ...state.tasks, action.payload ];
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task._id !== action.payload);
        },
        loadTasks: (state, action) => {
            state.tasks = action.payload;
        }
    }
});

export const { createTask, removeTask, loadTasks } = tasksSlice.actions;
export default tasksSlice.reducer;