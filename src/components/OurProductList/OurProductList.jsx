import React from "react";
// === Styled Components ===
import { ProductList } from "./index";
// === Components ===
import OurProductItem from "../OurProductItem/OurProductItem";

import { listProduct } from "../../data";
const OurProductList = () => {
  return (
    <ProductList>
      {listProduct.map((item) => {
        return <OurProductItem key={item.id} item={item} />;
      })}
    </ProductList>
  );
};

export default OurProductList;
