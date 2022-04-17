import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "../../common/api/productApi";

export const fetchAsyncProduct = createAsyncThunk(
  "products/fetchAsyncProduct",
  async () => {
    const response = await productsApi.get("products");
    return response.data;
  }
);
export const fetchAsyncProductDetail = createAsyncThunk(
  "products/fetchAsyncProductDetail",
  async (id) => {
    const response = await productsApi.get(`products/${id}`);
    return response.data;
  }
);

const initialState = {
  Items: {},
  ItemsDetail: {},
  status: null,
  statusDetail: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeFetchAsyncProduct: (state) => {
      state.ItemsDetail = {};
      state.statusDetail = null;
    },
  },
  extraReducers: {
    [fetchAsyncProduct.pending]: (state) => {
      state.status = "pending";
    },
    [fetchAsyncProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.Items = action.payload;
    },
    [fetchAsyncProduct.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchAsyncProductDetail.fulfilled]: (state, action) => {
      state.statusDetail = "success";
      state.ItemsDetail = action.payload;
    },
  },
});
export const { removeFetchAsyncProduct } = productsSlice.actions;
export default productsSlice.reducer;
