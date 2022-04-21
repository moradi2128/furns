import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import productsApi from "../../common/api/productApi";
// === Product Data ===
import pro1 from "../../assets/images/product/1.jpg";
import pro2 from "../../assets/images/product/2.jpg";
import pro3 from "../../assets/images/product/3.jpg";
import pro4 from "../../assets/images/product/4.jpg";
import img2 from "../../assets/images/2.jpg";
import img5 from "../../assets/images/5.jpg";
import img1 from "../../assets/images/1.jpg";
// export const fetchAsyncProduct = createAsyncThunk(
//   "products/fetchAsyncProduct",
//   async () => {
//     const response = await productsApi.get("products");
//     return response.data;
//   }
// );
// export const fetchAsyncProductDetail = createAsyncThunk(
//   "products/fetchAsyncProductDetail",
//   async (id) => {
//     const response = await productsApi.get(`products/${id}`);
//     return response.data;
//   }
// );

const initialState = {
  Items: [
    {
      id: 0,
      title: "Variable Product",
      price: "69.0",
      category: "Furniture",
      Availability: "1",
      discountPrice: "119.0",
      discountPercent: "42%",
      variants:"Gray / Semi Double / Wood",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      option: "true",
      info: {
        color: "Gray,Green,Chocolate,Blue",
        size: "Semi Double, Double, Single",
        Material: "Wood, Metal, Leather",
      },
      image: [pro1, pro2, pro3, pro4],
      imgHover: pro2,
    },
    {
      id: 1,
      title: "Josefa Queen Size Bed with Storage in Natural Teak Wood Finish",
      price: "199.0",
      category: "Furniture",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      Availability: "3",
      href: "/",
      image: img2,
    },
    {
      id: 2,
      title: "Twist Dining Table",
      category: "Furniture",
      Availability: "6",
      price: "288.0",
      discountPercent: "16%",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      href: "/",
      stockOut: "true",
      image: img1,
    },
    {
      id: 3,
      title: "Twist Dining Table",
      price: "288.0",
      category: "Furniture",
      Availability: "8",
      discountPercent: "16%",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      href: "/",
      stockOut: "true",
      image: img5,
    },
  ],
  ItemsDetail: [],
  status: "success",
  statusDetail: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductItem: (state, action) => {
      const itemFilter = state.Items.filter(
        (item) => item.id === Number(action.payload)
      );
      state.ItemsDetail = itemFilter;
      state.statusDetail = "success";
    },
    removeFetchAsyncProduct: (state) => {
      state.ItemsDetail = {};
      state.statusDetail = null;
    },
  },
  extraReducers: {
    // [fetchAsyncProduct.pending]: (state) => {
    //   state.status = "pending";
    // },
    // [fetchAsyncProduct.fulfilled]: (state, action) => {
    //   state.status = "success";
    //   state.Items = action.payload;
    // },
    // [fetchAsyncProduct.rejected]: (state) => {
    //   state.status = "rejected";
    // },
    // [fetchAsyncProductDetail.fulfilled]: (state, action) => {
    //   state.statusDetail = "success";
    //   state.ItemsDetail = action.payload;
    // },
  },
});
export const { removeFetchAsyncProduct, addProductItem } =
  productsSlice.actions;
export default productsSlice.reducer;
