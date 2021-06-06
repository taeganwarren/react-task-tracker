import { configureStore } from '@reduxjs/toolkit';
import addTaskButtonReducer from './addTaskButtonSlice';

export default configureStore({
    reducer: {
        addTaskButton: addTaskButtonReducer
    }
});