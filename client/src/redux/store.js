import { configureStore } from '@reduxjs/toolkit';
import addTaskButtonReducer from './addTaskButtonSlice';
import tasksReducer from './tasksSlice';
import registerReducer from './registerSlice';

export default configureStore({
    reducer: {
        addTaskButton: addTaskButtonReducer,
        tasks: tasksReducer,
        register: registerReducer
    }
});