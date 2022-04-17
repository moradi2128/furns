import React from "react";
// === Styled Components ===
import { ListProduct } from "./index";
// === Redux ===
import { useSelector } from "react-redux";
// === Components ===
import TopSection from "../../components/TopSection/TopSection";
import Sort from "../../components/Sort/Sort";
import OurProductItem from "../../components/OurProductItem/OurProductItem";
import Loading from "../../subComponents/Loading/Loading";

const Shop = () => {
  const { Items, status } = useSelector((state) => state.products);
  return (
    <main>
      <TopSection title="Product" name="shop" />
      <section className="container">
        <Sort productItem={Items.length} />
        <ListProduct>
          {status !== "success" ? (
            <Loading />
          ) : (
            Items.map((item) => {
              return <OurProductItem key={item.id} item={item} />;
            })
          )}
        </ListProduct>
      </section>
    </main>
  );
};

export default Shop;
