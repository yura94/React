import { configureStore } from "@reduxjs/toolkit";
import cocktailsSlice from "./cocktailsSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: {
    cocktails: cocktailsSlice,
    user: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
