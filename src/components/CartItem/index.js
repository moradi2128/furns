import styled from "styled-components";
 
export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem;
  border-bottom: 1px solid rgb(235, 235, 235);
`;
export const CartImgContainer = styled.a``;
export const CartImg = styled.img``;

export const CartBody = styled.div``;
export const ProductTitle = styled.a`
  display: block;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 1rem;
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
  & svg{
    width: 20px;
    height: 20px;
  }
  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(220, 53, 69);
  }
`;
