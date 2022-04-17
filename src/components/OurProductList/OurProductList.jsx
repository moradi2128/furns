import React from "react";
import { useSelector } from "react-redux";
// === Styled Components ===
import { ProductList } from "./index";
// === Components ===
import OurProductItem from "../OurProductItem/OurProductItem";
import Loading from "../../subComponents/Loading/Loading";

const OurProductList = () => {
  const { Items, status } = useSelector((state) => state.products);
  return (
    <ProductList>
      {status !== "success" ? (
        <Loading />
      ) : (
        Items.slice(0, 4).map((item) => {
          return <OurProductItem key={item.id} item={item} />;
        })
      )}
    </ProductList>
  );
};

export default OurProductList;
