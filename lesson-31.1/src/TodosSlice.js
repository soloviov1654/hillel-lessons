import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    loadTodos: () => {},
    setTodos: (state, action) => {
      state.list = action.payload;
    },
    addTodo: () => {},
    removeTodo: () => {},
    toggleTodo: () => {},
    editTodo: () => {},
    clearTodos: () => {},
  },
});

export const {
  loadTodos,
  setTodos,
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  clearTodos,
} = todosSlice.actions;

export default todosSlice.reducer;