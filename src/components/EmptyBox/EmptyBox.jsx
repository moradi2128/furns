import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Wrapper } from "./index";

const EmptyBox = ({ children }) => {
  return (
    <Wrapper>
      <FiShoppingBag />
      <h2>There are no products{children}!</h2>
    </Wrapper>
  );
};

export default EmptyBox;
