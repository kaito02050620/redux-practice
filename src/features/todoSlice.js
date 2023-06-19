import { createSlice } from "@reduxjs/toolkit";

const getTodos = JSON.parse(localStorage.getItem("TAKENOKO_TODO"));

const todoSlice = createSlice({
  name: "todo",
  initialState: getTodos || [],
  reducers: {
    add: (state, action) => {
      const newTodo = [...state, action.payload];
      localStorage.setItem("TAKENOKO_TODO", JSON.stringify(newTodo));
      return newTodo;
    },
    delete: (state, action) => {
      const newTodo = [...state, action.payload];
      return newTodo;
    },
  },
});

export const { add } = todoSlice.actions;
export default todoSlice.reducer;
