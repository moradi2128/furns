import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const wishlistIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (wishlistIndex < 0) {
        state.wishlistItems.push({ ...action.payload });
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        );
        toast.success(`add ${action.payload.title} to wishlist`, {
          position: "top-right",
        });
      }
    },
    removeFromWishlist(state, action) {
      const filterWishlist = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishlistItems = filterWishlist;
      localStorage.setItem("wishlistItems", JSON.stringify(filterWishlist));
      toast.error(`remove ${action.payload.title} form wishlist`, {
        position: "top-right",
      });
    },
  },
});
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
