import React from "react";
import {Item} from "./index";

const CarouselListProductItem = ({ children, title, href }) => {
  return (
    <Item href={href}>
      {children} <h4>{title}</h4>
    </Item>
  );
};

export default CarouselListProductItem;
