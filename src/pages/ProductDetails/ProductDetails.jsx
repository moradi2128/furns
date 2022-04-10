import React, { useState, useCallback } from "react";
// === Styled Components ===
import {
  Wrapper,
  DescriptionBox,
  ProductDescriptionTop,
  AddContainer,
  WishlistCompareContainer,
  WishlistCompare,
  ShareSocial,
  InfoItem,
  ReviewContainer,
} from "./index";

// === Data ===
import { productDetails } from "../../data";

// === Icons ===
import {
  AiOutlineHeart,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";

// === Components ===
import TopSection from "../../components/TopSection/TopSection";
import CarouselListProductDetails from "../../components/CarouselProductDetails/CarouselProductDetails";
import Selection from "../../subComponents/Selection/Selection";
import Counter from "../../subComponents/counter/Counter";
import BtnCart from "../../subComponents/BtnCart/BtnCart";
import TabList from "../../components/TabList/TabList";
import AddReview from "../../components/AddReview/AddReview";
import UserReview from "../../components/UserReview/UserReview";
import RelatedProduct from "../../components/RelatedProducts/RelatedProduct";

const ProductDetails = () => {
  // === Selection ===
  const [colorValue, setColorValue] = useState("Gray");
  const [sizeValue, setSizeValue] = useState("Semi Double");
  const [materialValue, setMaterialValue] = useState("Wood");
  // === Counter ===
  const [counter, setCounter] = useState(1);
  const callback = useCallback((count) => {
    setCounter(count);
  }, []);
  // === Wishlist and Compare ===
  const [isWishlist, setIsWishlist] = useState(false);
  const [isCompare, setIsCompare] = useState(false);
  return (
    <main>
      <TopSection title="variable product" pathname="variable product" />
      <section>
        <Wrapper className="container">
          <DescriptionBox>
            <div className="col-md-6 col-lg-5">
              <CarouselListProductDetails img={productDetails[0].img} />
            </div>
            <div className="col-md-6 col-lg-7">
              <ProductDescriptionTop>
                <p>
                  SKU : <span>{productDetails[0].sku}</span>
                </p>
                <p>
                  Availability :{" "}
                  <span>{productDetails[0].Availability} in Stock</span>
                </p>
                <h2>{productDetails[0].title}</h2>
                <h3 className="price">
                  <del className="old">${productDetails[0].price}</del> $
                  {productDetails[0].discountPrice}
                </h3>
                <p>{productDetails[0].description}</p>
              </ProductDescriptionTop>
              {/* === Selection === */}
              <Selection
                label="color"
                setValueSelection={setColorValue}
                valueSelection={colorValue}
              >
                <li>Gray</li>
                <li>Green</li>
                <li>Chocolate</li>
              </Selection>
              <Selection
                label="Size"
                setValueSelection={setSizeValue}
                valueSelection={sizeValue}
              >
                <li>Semi Double</li>
                <li>Double</li>
                <li>Single</li>
              </Selection>
              <Selection
                label="Material"
                setValueSelection={setMaterialValue}
                valueSelection={materialValue}
              >
                <li>Wood</li>
                <li>Metal</li>
                <li>Leather</li>
              </Selection>
              <AddContainer>
                <Counter parentCallback={callback} productDetail />
                <BtnCart>Add to Cart</BtnCart>
              </AddContainer>
              <WishlistCompareContainer>
                <WishlistCompare onClick={() => setIsWishlist(!isWishlist)}>
                  <AiOutlineHeart />
                  {isWishlist ? (
                    <span>Remove to wishlist</span>
                  ) : (
                    <span>Add to wishlist</span>
                  )}
                </WishlistCompare>
                <WishlistCompare onClick={() => setIsCompare(!isCompare)}>
                  <BiGitCompare />
                  {isCompare ? (
                    <span>Remove to Compare</span>
                  ) : (
                    <span>Add to Compare</span>
                  )}
                </WishlistCompare>
              </WishlistCompareContainer>
              <ShareSocial>
                <h4>Share:</h4>
                <a href="/">
                  <AiFillFacebook />
                </a>
                <a href="/">
                  <AiOutlineTwitter />
                </a>
                <a href="/">
                  <AiFillLinkedin />
                </a>
              </ShareSocial>
            </div>
          </DescriptionBox>
          <TabList>
            {/* Tab Item */}
            <li id="0">Description</li>
            <li id="1">Additional Info</li>
            <li id="2">Reviews</li>
            {/* Tab List Item */}
            <div id="0">{productDetails[0].description}</div>
            <div id="1">
              <ul>
                <InfoItem>
                  <span>Color:</span>
                  {productDetails[0].color}
                </InfoItem>
                <InfoItem>
                  <span>size:</span>
                  {productDetails[0].size}
                </InfoItem>
                <InfoItem>
                  <span>Material:</span>
                  {productDetails[0].Material}
                </InfoItem>
              </ul>
            </div>
            <div id="2">
              <ReviewContainer>
                <div className="col-lg-7">
                  <UserReview />
                  <UserReview />
                  <UserReview />
                  <UserReview />
                </div>
                <div className="col-lg-5">
                  <AddReview />
                </div>
              </ReviewContainer>
            </div>
          </TabList>
          <RelatedProduct />
        </Wrapper>
      </section>
    </main>
  );
};

export default ProductDetails;
