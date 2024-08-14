import { configureStore } from "@reduxjs/toolkit";
import cocktailsSlice from "./cocktailsSlice";

const store = configureStore({
  reducer: {
    cocktails: cocktailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
