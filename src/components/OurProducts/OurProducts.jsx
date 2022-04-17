import React, { useState } from "react";
import { useSelector } from "react-redux";
// === Styled Components ===
import {
  OurProductsHeader,
  OurProductsTab,
  TabList,
  TabListItem,
  TabBody,
  ListProduct,
} from "./index";

// === Components ===
import OurProductItem from "../OurProductItem/OurProductItem";
import Loading from "../../subComponents/Loading/Loading";

const OurProducts = () => {
  const { Items, status } = useSelector((state) => state.products);
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
          {tabItem === 0 && (
            <ListProduct>
              {status !== "success" ? (
                <Loading />
              ) : (
                Items.slice(0,9).map((item) => {
                  return <OurProductItem key={item.id} item={item} />;
                })
              )}
            </ListProduct>
          )}
          {tabItem === 1 && (
            <ListProduct>
              {status !== "success" ? (
                <Loading />
              ) : (
                Items.slice(9,12).map((item) => {
                  return <OurProductItem key={item.id} item={item} />;
                })
              )}
            </ListProduct>
          )}
          {tabItem === 2 && (
            <ListProduct>
              {status !== "success" ? (
                <Loading />
              ) : (
                Items.slice(12,15).map((item) => {
                  return <OurProductItem key={item.id} item={item} />;
                })
              )}
            </ListProduct>
          )}
          {tabItem === 3 && (
            <ListProduct>
              {status !== "success" ? (
                <Loading />
              ) : (
                Items.slice(15,20).map((item) => {
                  return <OurProductItem key={item.id} item={item} />;
                })
              )}
            </ListProduct>
          )}
        </TabBody>
      </OurProductsTab>
    </section>
  );
};

export default OurProducts;
