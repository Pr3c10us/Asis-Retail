import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
  order: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    shipping: "",
  },
};

export const asis = createSlice({
  name: "Asis",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setOrder: (state, action) => {
      state.order = { ...state.order, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCart, setOrder } = asis.actions;

export default asis.reducer;
