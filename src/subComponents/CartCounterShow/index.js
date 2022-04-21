import styled from "styled-components";

export const Btn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  right: 0px;
  padding: 15px;
  display: flex;
  gap: 0.2rem;
  z-index: 999;
  position: fixed;
  align-items: center;
  top: calc(110px + 30%);
  flex-direction: column;
  border-radius: 3px 0px 0px 3px;
  color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 75%) 0px 0px 16px -1px;
  background-color: rgb(47, 51, 58);
  font-weight: 600;
  svg {
    font-size: x-large;
    color: rgb(255, 112, 4);
  }
`;
export const CartItem = styled.span``;
export const CartPrice = styled.span`
  width: 65px;
  height: 25px;
  padding: 0px 5px;
  margin-top: 5px;
  line-height: 25px;
  color: rgb(255, 112, 4);
  border-radius: 3px;
  font-size: 14px;
  background-color: rgb(255, 255, 255);
  font-weight: 700;
`;
