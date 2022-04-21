import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import productsApi from "../../common/api/productApi";

// export const fetchAsyncProductDetail = createAsyncThunk(
//   "products/fetchAsyncProductDetail",
//   async (id) => {
//     const response = await productsApi.get(`products/${id}`);
//     return response.data;
//   }
// );

const initialState = {
  quickViewItem: [],
  status: false,
};

const quickViewSlice = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    addQuickViewItem: (state, action) => {
      state.quickViewItem = action.payload;
      state.status = true;
    },
    removeFetchAsyncQuickViewItem: (state) => {
      state.status = false;
      state.quickViewItem = [];

      //   state.quickViewItem = [];
    },
  },
  extraReducers: {
    // [fetchAsyncProductDetail.fulfilled]: (state, action) => {
    //   state.statusDetail = "success";
    //   state.ItemsDetail = action.payload;
    // },
  },
});
export const { removeFetchAsyncQuickViewItem, addQuickViewItem } =
  quickViewSlice.actions;
export default quickViewSlice.reducer;
