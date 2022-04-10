import React from "react";
// === Components ===
import TopSection from "../../components/TopSection/TopSection";
import Sort from "../../components/Sort/Sort";
import OurProductList from "../../components/OurProductList/OurProductList";
const Shop = () => {
  return (
    <main>
      <TopSection title="Product" pathname="shop" />
      <section className="container">
        <Sort />
        <OurProductList />
      </section>
    </main>
  );
};

export default Shop;
