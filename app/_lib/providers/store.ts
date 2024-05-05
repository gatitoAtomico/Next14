import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/themeSlice";
import countSlice from "../features/counterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeSlice,
      counter: countSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
