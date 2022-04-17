import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  // === Local Storage
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],

  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard(state, action) {
      const cartIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartIndex >= 0) {
        state.cartItems[cartIndex].cartQuantity += 1;
        toast.info(
          `increased ${state.cartItems[cartIndex].title} cart quantity`,
          {
            position: "top-right",
          }
        );
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.cartItems.push(tempProduct);
        toast.success(`added ${action.payload.title} to cart`, {
          position: "top-right",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItem = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItem;
      localStorage.setItem("cartItems", JSON.stringify(nextCartItem));
      toast.error(`remove ${action.payload.title} to cart`, {
        position: "top-right",
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
    },
    clearCart(state, action) {
      state.cartItems = [];
      toast.error(`Cart Cleared`, {
        position: "top-right",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total.toFixed(2);
    },
    addToCartCounter(state, action) {
      console.log(action);
      const cartIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartIndex >= 0) {
        state.cartItems[cartIndex].cartQuantity += action.payload.counter;
        toast.info(
          `increased ${state.cartItems[cartIndex].title} cart quantity`,
          {
            position: "top-right",
          }
        );
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: action.payload.counter,
        };
        state.cartItems.push(tempProduct);
        toast.success(`added ${action.payload.title} to cart`, {
          position: "top-right",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
export const { addToCard, removeFromCart, decreaseCart, clearCart, getTotal,addToCartCounter } =
  cartSlice.actions;
export default cartSlice.reducer;
