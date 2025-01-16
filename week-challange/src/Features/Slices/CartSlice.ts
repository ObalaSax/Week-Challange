import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsData {
  id: number;
  title: string;
}

interface ProductState {
  productItems: ProductsData[];
  nextCartId: number;
}

const initialState: ProductState = {
  productItems: [],
  nextCartId: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const newCartItem: ProductsData = {
        id: state.nextCartId,
        title: action.payload,
      };

      state.productItems.push(newCartItem);
      state.nextCartId++;
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.productItems = state.productItems.filter(
        (prod) => prod.id !== action.payload,
      );
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
