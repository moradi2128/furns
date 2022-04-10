import React, { useState, useCallback } from "react";
// === Styled Components ===
import {
  CartItemContainer,
  CartImgContainer,
  CartImg,
  CartBody,
  ProductTitle,
  ProductPrice,
  CartDelete,
} from "./index";

// === Img ===
import ProImg from "../../assets/images/1.jpg";
// === Icons ===
import { AiOutlineClose } from "react-icons/ai";
// === Components ===
import Counter from "../../subComponents/counter/Counter";

const CartItem = () => {
  const [counter, setCounter] = useState(1);
  const callback = useCallback((count) => {
    setCounter(count);
  }, []);
  return (
    <CartItemContainer>
      <CartImgContainer href="/">
        <CartImg src={ProImg} alt="pro" />
      </CartImgContainer>
      <CartBody>
        <ProductTitle href="/">
          Josefa Queen Size Bed with Storage in Natural Teak Wood Finish
        </ProductTitle>
        <ProductPrice>
          {counter} x <span>$199.0</span>
        </ProductPrice>
        <Counter parentCallback={callback} />
      </CartBody>
      <CartDelete>
        <AiOutlineClose />
      </CartDelete>
    </CartItemContainer>
  );
};
export default CartItem;
