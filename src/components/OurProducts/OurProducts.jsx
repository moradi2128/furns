import React, { useState } from "react";
// === Styled Components ===
import {
  OurProductsHeader,
  OurProductsTab,
  TabList,
  TabListItem,
  TabBody,
} from "./index";

// === Components ===
import OurProductList from "../OurProductList/OurProductList";

const OurProducts = () => {
  const [tabItem, setTabItem] = useState(0);
  return (
    <section>
      <OurProductsHeader className="container">
        <h2>Our Products</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore
        </p>
      </OurProductsHeader>
      <OurProductsTab>
        <TabList>
          <TabListItem
            onClick={() => setTabItem(0)}
            className={tabItem === 0 && "active"}
          >
            New Arrival
          </TabListItem>
          <TabListItem
            onClick={() => setTabItem(1)}
            className={tabItem === 1 && "active"}
          >
            Featured
          </TabListItem>
          <TabListItem
            onClick={() => setTabItem(2)}
            className={tabItem === 2 && "active"}
          >
            On Sale
          </TabListItem>
          <TabListItem
            onClick={() => setTabItem(3)}
            className={tabItem === 3 && "active"}
          >
            Tending
          </TabListItem>
        </TabList>
        <TabBody className="container">
          <OurProductList />
        </TabBody>
      </OurProductsTab>
    </section>
  );
};

export default OurProducts;
