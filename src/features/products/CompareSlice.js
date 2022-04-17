import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  compareItems: localStorage.getItem("compareItems")
    ? JSON.parse(localStorage.getItem("compareItems"))
    : [],
};
const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare(state, action) {
      const compareIndex = state.compareItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (compareIndex < 0) {
        state.compareItems.push({ ...action.payload });
        localStorage.setItem(
          "compareItems",
          JSON.stringify(state.compareItems)
        );
        toast.success(`add ${action.payload.title} to compare`, {
          position: "top-right",
        });
      }
    },
    removeFromCompare(state, action) {
      const filterCompare = state.compareItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.compareItems = filterCompare;
      localStorage.setItem("compareItems", JSON.stringify(filterCompare));
      toast.error(`remove ${action.payload.title} form compare`, {
        position: "top-right",
      });
    },
  },
});
export const { addToCompare, removeFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
