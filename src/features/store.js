import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./products/CartSlice";
import productsReducer from "./products/ProductsSlice";
import WishlistReducer from "./products/WishlistSlice";
import CompareReducer from "./products/CompareSlice";
export const store = configureStore(
  {
    reducer: {
      products: productsReducer,
      cart: CartReducer,
      wishlist: WishlistReducer,
      compare: CompareReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ /
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
);
