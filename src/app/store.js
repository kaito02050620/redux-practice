import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todoSlice";

//@reduxjs/toolkitからストアを作成する。
export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
