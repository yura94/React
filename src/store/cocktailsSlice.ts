import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { count } from "console";

interface cocktailsType {
  id: number;
  name: string;
  is_alcohol: boolean;
  img: string;
  ml: string;
  price: string;
  countOrder: number;
}

const initialState: cocktailsType[] = [];

const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    fetchCocktails(state, action: PayloadAction<cocktailsType[]>) {
      state.push(...action.payload);
    },
    increment: (state: cocktailsType[], action: PayloadAction<number>) => {
      state.map((el) =>
        el.id === action.payload ? { ...el, countOrder: el.countOrder++ } : el
      );
    },
    decrement: (state, action) => {
      state.map((el) =>
        el.id === action.payload ? { ...el, countOrder: el.countOrder-- } : el
      );
    },
  },
});

export const { increment, decrement, fetchCocktails } = cocktailsSlice.actions;
export default cocktailsSlice.reducer;
