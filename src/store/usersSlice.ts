import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface usersType {
  id?: number;
  name?: string;
  email?: string;
}

const initialState: usersType = {};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUser(state: usersType, action: PayloadAction<usersType>) {
      return (state = action.payload);
    },
    fetchUserByEmail(state: usersType, action: PayloadAction<usersType>) {
      console.log("registerData", action.payload);
      return (state = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      });
    },
    logoutUser(state: usersType) {
      return (state = { name: "", email: "" });
    },
  },
});

export const { fetchUser, fetchUserByEmail, logoutUser } = usersSlice.actions;
export default usersSlice.reducer;
