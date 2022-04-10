import React from "react";
import { Btn, CartItem, CartPrice } from "./index";
import { FiShoppingBag } from "react-icons/fi";
const CartCounterShow = ({ setIsOpenCart }) => {
  return (
    <Btn onClick={() => setIsOpenCart(true)}>
      <FiShoppingBag />
      <CartItem>1 Items</CartItem>
      <CartPrice>$768.00</CartPrice>
    </Btn>
  );
};

export default CartCounterShow;
