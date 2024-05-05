import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../providers/store";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const themeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = themeSlice.actions;

export default themeSlice.reducer;
