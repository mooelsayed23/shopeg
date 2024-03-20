import { configureStore } from "@reduxjs/toolkit";
import showAsideReducer from "./showAsideSlice";

export const store = configureStore({
  reducer: {
    showAside: showAsideReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
