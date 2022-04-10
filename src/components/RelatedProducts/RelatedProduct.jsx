import React from "react";
import { Wrapper } from "./index";

import OurProductList from "../../components/OurProductList/OurProductList";
const RelatedProduct = () => {
  return (
    <Wrapper>
      <h2>Related Products</h2>
      <OurProductList />
    </Wrapper>
  );
};

export default RelatedProduct;
