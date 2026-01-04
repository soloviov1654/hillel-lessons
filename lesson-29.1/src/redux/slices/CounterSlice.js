import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
      console.log(state.value)
    },
    decrement: (state) => {
      state.value--;
      console.log(state.value)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
