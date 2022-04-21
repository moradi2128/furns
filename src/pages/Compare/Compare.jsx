import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../../features/products/CartSlice.js";
import { removeFromCompare } from "../../features/products/CompareSlice.js";
import {
  Table,
  TrTable,
  ThTable,
  ImgContainer,
  TitleProduct,
} from "./index.js";

// === Icons ===
import { FiTrash2 } from "react-icons/fi";

// === Components ===
import TopSection from "../../components/TopSection/TopSection.jsx";
import EmptyBox from "../../components/EmptyBox/EmptyBox.jsx";
import BtnCart from "../../subComponents/BtnCart/BtnCart";

const Compare = () => {
  const { compareItems } = useSelector((state) => state.compare);
  const dispatch = useDispatch();
  // === Add to cart
  const handlerAddToCart = (productItem) => {
    dispatch(addToCard(productItem));
  };
  // === remove from compare
  const handlerRemoveFromCompare = (productItem) => {
    dispatch(removeFromCompare(productItem));
  };
  return (
    <main>
      <TopSection title="compare" name="compare" />
      <section className="container">
        {compareItems.length === 0 ? (
          <EmptyBox> in your Compare</EmptyBox>
        ) : (
          <Table>
            <TrTable>
              <ThTable>Product</ThTable>
              {compareItems.map((item) => {
                return (
                  <ThTable className="thItem" key={item.id}>
                    <FiTrash2 onClick={() => handlerRemoveFromCompare(item)} />
                    <ImgContainer to={`/product/${item.id}`}>
                      <img
                        src={
                          Array.isArray(item.image) ? item.image[0] : item.image
                        }
                        alt={item.title}
                      />
                    </ImgContainer>
                    <TitleProduct to={`/product/${item.id}`}>
                      {item.title}
                    </TitleProduct>
                  </ThTable>
                );
              })}
            </TrTable>
            <TrTable>
              <ThTable>Description</ThTable>
              {compareItems.map((item) => {
                return (
                  <ThTable className="thItem" key={item.id}>
                    <div className="thDescription">{item.description}</div>
                  </ThTable>
                );
              })}
            </TrTable>
            <TrTable>
              <ThTable>Price</ThTable>
              {compareItems.map((item) => {
                return (
                  <ThTable className="thItem thPrice" key={item.id}>
                    ${item.price}
                  </ThTable>
                );
              })}
            </TrTable>
            <TrTable>
              <ThTable>Variants</ThTable>
              {compareItems.map((item) => {
                return (
                  <ThTable className="thItem" key={item.id}>
                    <span>{item.variants ? item.variants : "-"}</span>
                  </ThTable>
                );
              })}
            </TrTable>
            <TrTable>
              <ThTable>Stock</ThTable>
              {compareItems.map((item) => {
                return (
                  <ThTable className="thItem" key={item.id}>
                    {item.stockOut ? (
                      <span style={{ color: "red" }}>Out of Stock</span>
                    ) : (
                      <span style={{ color: "green" }}>Available</span>
                    )}
                  </ThTable>
                );
              })}
            </TrTable>
            <TrTable>
              <ThTable>Add to Cart</ThTable>
              {compareItems.map((item) => {
                return (
                  <ThTable className="thItem btn-compare">
                    {item.option ? (
                      <BtnCart href={`/product/${item.id}`}>
                        Select option
                      </BtnCart>
                    ) : item.stockOut ? (
                      <BtnCart stockOut>Out of Stock</BtnCart>
                    ) : (
                      <BtnCart click={() => handlerAddToCart(item)}>
                        Add Cart
                      </BtnCart>
                    )}
                  </ThTable>
                );
              })}
            </TrTable>
          </Table>
        )}
      </section>
    </main>
  );
};

export default Compare;
