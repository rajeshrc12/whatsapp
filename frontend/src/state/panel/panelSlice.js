import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  main: "",
  left: "",
  middle: "",
  right: "",
};

const panelSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    main: (state, action) => {
      state.main = action.payload;
    },
    left: (state, action) => {
      state.left = action.payload;
    },
    middle: (state, action) => {
      state.middle = action.payload;
    },
    right: (state, action) => {
      state.right = action.payload;
    },
    resetPanel: () => initialState,
  },
});

export const { main, left, middle, right, resetPanel } = panelSlice.actions;
export default panelSlice.reducer;
