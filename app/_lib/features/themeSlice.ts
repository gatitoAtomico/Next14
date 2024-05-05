"use client";

import { createSlice } from "@reduxjs/toolkit";
import { Palette, appTheme } from "@/app/_Utils/theme";

const defaultTheme: Palette = appTheme.main;

export const themeSlice = createSlice({
  name: "theme",
  initialState: defaultTheme,
  reducers: {
    changeTheme: (state, action) => {
      let payload = action.payload;
      return (state = appTheme[payload] || defaultTheme);
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
