import { createSlice } from "@reduxjs/toolkit";

interface CounterValues {
  myNumber: number;
}

const initialState: CounterValues = {
  myNumber: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementNumber: (state) => {
      state.myNumber += 1;
    },
    decrementNumber: (state) => {
      state.myNumber -= 1;
    },
  },
});

export const { incrementNumber, decrementNumber } = counterSlice.actions;
export default counterSlice.reducer;
