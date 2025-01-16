import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../Slices/CounterSlice";
import { TodoSlice } from "../Slices/TodoSlice";
import { DataApi } from "../Slices/DataApi";
import { CartSlice } from "../Slices/CartSlice";

export const myStore = configureStore({
  reducer: {
    [DataApi.reducerPath]: DataApi.reducer,
    counter: counterSlice.reducer,
    todo: TodoSlice.reducer,
    cart: CartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(DataApi.middleware),
});

export type myRootState = ReturnType<typeof myStore.getState>;
export type myAppDispatch = typeof myStore.dispatch;
