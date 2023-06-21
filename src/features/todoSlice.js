import { createSlice } from "@reduxjs/toolkit";

const getTodos = JSON.parse(localStorage.getItem("TAKENOKO_TODO"));

const updateId = (arr) => {
  const newObj = new Array();
  arr.forEach((todo, index) => {
    newObj.push({ id: index, task: todo.task });
  });
  return newObj;
};

const todoSlice = createSlice({
  name: "todo",
  initialState: getTodos || [],
  reducers: {
    add: (state, action) => {
      const newTodo = [...state, action.payload];
      localStorage.setItem("TAKENOKO_TODO", JSON.stringify(newTodo));
      return newTodo;
    },
    remove: (state, action) => {
      const todos = Object.values(state).map((item) => ({ ...item }));
      let updateTodo = todos.filter((todo) => todo.id !== action.payload.id);
      updateTodo = updateId(updateTodo);
      localStorage.setItem("TAKENOKO_TODO", JSON.stringify(updateTodo));
      return updateTodo;
    },
  },
});

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;
