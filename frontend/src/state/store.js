import { configureStore } from "@reduxjs/toolkit";
import panelReducer from "./panel/panelSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    panel: panelReducer,
    user: userReducer,
  },
});
