import styled from "styled-components";
import { Link } from "react-router-dom";
export const CartItemContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid rgb(235, 235, 235);
`;
export const CartImgContainer = styled(Link)`
  width: 100px;
  height: 120px;
  overflow: hidden;
`;
export const CartImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CartBody = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProductTitle = styled(Link)`
  display: block;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 1rem;

  max-width: 210px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const ProductPrice = styled.p`
  & span {
    font-size: 16px;
    font-weight: 500;
    color: rgb(255, 112, 4);
    margin-left: 3px;
  }
`;

export const CartDelete = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  width: 25px;
  height: 25px;
  line-height: 1;
  font-size: 17px;
  color: rgb(33, 33, 33);
  font-family: Raleway;
  border-radius: 50%;
  & svg {
    width: 20px;
    height: 20px;
  }
  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(220, 53, 69);
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 72%;
`;
