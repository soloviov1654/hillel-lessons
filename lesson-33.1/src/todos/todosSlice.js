import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: Date.now(),
        title: action.payload,
      });
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.list.find((t) => t.id === id);
      if (todo) {
        todo.title = title;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;