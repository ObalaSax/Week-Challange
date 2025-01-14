import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../Slices/CounterSlice";
import { TodoSlice } from "../Slices/TodoSlice";

export const myStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: TodoSlice.reducer,
  },
});

export type myRootState = ReturnType<typeof myStore.getState>;
export type myAppDispatch = typeof myStore.dispatch;
