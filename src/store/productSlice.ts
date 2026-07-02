import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsModel } from "../../src/utils/index";

export const productSlice = createSlice({
  name: "productSlice",
  initialState: [] as IProductsModel[],
  reducers: {
    addProduct: (state, action: PayloadAction<IProductsModel>) => {
      const productExists = state.some(
        (product: IProductsModel) => product.id === action.payload.id
      );
      if (!productExists) {
        return [...state, action.payload];
      }
      return state; 
    },
    removeProduct: (state, action: PayloadAction<IProductsModel>) => {
      const updatedProducts = state.filter(
        (item: IProductsModel) => item.id !== action.payload.id
      );
      return updatedProducts;
    },
    addMultipleProducts: (_state, action: PayloadAction<IProductsModel[]>) => {
      return action.payload;
    },
  },
});

export const { addProduct, removeProduct, addMultipleProducts } =
  productSlice.actions;
export default productSlice.reducer;
