import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      return (state = action.payload);
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
    deleteOrder: (state, action) => {
      state.forEach((el) =>
        el.id === action.payload ? (el.countOrder = 0) : el
      );
    },
    deleteAllOrders: (state) => {
      state.forEach((el) => (el.countOrder = 0));
    },
  },
});

export const {
  increment,
  decrement,
  fetchCocktails,
  deleteOrder,
  deleteAllOrders,
} = cocktailsSlice.actions;
export default cocktailsSlice.reducer;
