import React from "react";
import { Item } from "./index";

const CarouselListProductItem = ({ img, title, to }) => {
  return (
    <Item to={to}>
      <img src={img} alt={title} />
      <h4>{title}</h4>
    </Item>
  );
};

export default CarouselListProductItem;
