import React from "react";
// === Styled Components ===
import { Cart, ChartList, CartFooter, CartFooterRight } from "./index";
// === Components ===
import CartItem from "../CartItem/CartItem";
const CartModal = () => {
  return (
    <Cart>
      <ChartList>
        <CartItem />
        <CartItem />
      </ChartList>

      {/* Footer Cart */}
      <CartFooter href="/cart">
        View Cart
        <CartFooterRight>$100,00</CartFooterRight>
      </CartFooter>
    </Cart>
  );
};

export default CartModal;
