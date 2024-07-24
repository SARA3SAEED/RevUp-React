import { configureStore } from "@reduxjs/toolkit";
import ColorsSlice from "./Slices/ColorsSlice";
export const store = configureStore({
  reducer: {
    carColors: ColorsSlice,
  },
});
