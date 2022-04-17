import React from "react";
import { useSelector } from "react-redux";
// === Styled Components ===
import { Cart, ChartList, CartFooter, CartFooterRight,WrapperEmpty } from "./index";
// === Components ===
import CartItem from "../CartItem/CartItem";
import EmptyBox from "../EmptyBox/EmptyBox";
const CartModal = ({setIsOpenCart}) => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  return (
    <Cart>
      <ChartList>
        {cartItems.length === 0 ? (
          <WrapperEmpty>
            <EmptyBox></EmptyBox>
          </WrapperEmpty>
        ) : (
          cartItems.map((item) => {
            return <CartItem item={item} />;
          })
        )}
      </ChartList>

      {/* Footer Cart */}
      <CartFooter to="/cart" onClick={()=>{setIsOpenCart(false)}}>
        View Cart
        <CartFooterRight>${cartTotalAmount}</CartFooterRight>
      </CartFooter>
    </Cart>
  );
};

export default CartModal;
