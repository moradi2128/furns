import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./features/store";
// import { fetchAsyncProduct } from "./features/products/ProductsSlice";
import { getTotal } from "./features/products/CartSlice";

// store.dispatch(fetchAsyncProduct());
store.dispatch(getTotal());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
