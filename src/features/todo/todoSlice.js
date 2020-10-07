import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      const index = state.map((todo) => todo.id).indexOf(action.payload);
      state.splice(index, 1);
    },
    doneTodo: (state, action) => {
      const index = state.map((todo) => todo.id).indexOf(action.payload);
      state[index].done = true;
    },
  },
});

export const { addTodo, removeTodo, doneTodo } = todoSlice.actions;
export const selectTodo = (state) => state.todo;

export default todoSlice.reducer;
