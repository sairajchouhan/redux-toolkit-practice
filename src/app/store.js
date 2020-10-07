import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../features/todo/todoSlice';

export default configureStore({
  reducer: {
    todo: todoSlice,
  },
});
