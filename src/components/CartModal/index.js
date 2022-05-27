import styled from "styled-components";
import { Link } from "react-router-dom";
export const Cart = styled.div`
  height: calc(100% - 160px);
`;
export const ChartList = styled.div`
  overflow: auto;
  height: 100%;
`;
export const WrapperEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
// Footer Cart
export const CartFooter = styled(Link)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;

  display: inline-block;
  text-align: start;
  padding: 15px 12px;
  border-radius: 3px;
  line-height: 1;
  transition: all 0.4s ease 0s;
  font-size: 16px;
  font-family: Raleway, "Montserrat", sans-serif;
  background-color: rgb(255, 112, 4);
  color: rgb(255, 255, 255);
  font-weight: 600;
  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(47, 51, 58);
  }
`;
export const CartFooterRight = styled.div`
  top: 50%;
  right: 10px;
  height: 37px;
  display: flex;
  padding: 10px;
  position: absolute;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  color: rgb(255, 112, 4);
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  font-weight: 600;
`;
