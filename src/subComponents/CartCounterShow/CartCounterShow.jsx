import React, { useEffect } from "react";
import { Btn, CartItem, CartPrice } from "./index";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../features/products/CartSlice";
const CartCounterShow = ({ setIsOpenCart }) => {
  const dispatch = useDispatch();
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);
  return (
    <Btn onClick={() => setIsOpenCart(true)}>
      <FiShoppingBag />
      <CartItem>{cartItems.length} Items</CartItem>
      <CartPrice>${cartTotalAmount}</CartPrice>
    </Btn>
  );
};

export default CartCounterShow;
