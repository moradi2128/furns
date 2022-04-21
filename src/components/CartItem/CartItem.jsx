import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseCart,
  addToCard,
} from "../../features/products/CartSlice";
// === Styled Components ===
import {
  CartItemContainer,
  CartImgContainer,
  CartImg,
  CartBody,
  ProductTitle,
  ProductPrice,
  CartDelete,
  CardWrapper,
} from "./index";
import {
  CounterContainer,
  BtnContainer,
  ControlBtn,
  CounterOutput,
} from "../../subComponents/counter/index";
// === Icons ===
import { AiOutlineClose } from "react-icons/ai";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handlerDeleteCartItem = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  // === Counter ===
  const [counter, setCounter] = useState(item.cartQuantity);
  //increase counter
  const increase = (cartItem) => {
    dispatch(addToCard(cartItem));
    setCounter(counter + 1);
  };

  //decrease counter
  const decrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
    counter > 1 && setCounter((count) => count - 1);
  };
  return (
    <CartItemContainer>
      <CartImgContainer href={`/product/${item.id}`}>
        <CartImg src={Array.isArray(item.image)? item.image[0]: item.image} alt={item.title} />
      </CartImgContainer>
      <CardWrapper>
        <CartBody>
          <ProductTitle href={`/product/${item.id}`}>{item.title}</ProductTitle>
          <ProductPrice>
            {item.cartQuantity} x <span>${item.price}</span>
          </ProductPrice>
          <CounterContainer>
            <BtnContainer>
              <ControlBtn
                className="control__btn"
                onClick={() => decrease(item)}
              >
                -
              </ControlBtn>
              <CounterOutput>{item.cartQuantity}</CounterOutput>
              <ControlBtn
                className="control__btn"
                onClick={() => increase(item)}
              >
                +
              </ControlBtn>
            </BtnContainer>
          </CounterContainer>
        </CartBody>
        <CartDelete onClick={() => handlerDeleteCartItem(item)}>
          <AiOutlineClose />
        </CartDelete>
      </CardWrapper>
    </CartItemContainer>
  );
};
export default CartItem;
