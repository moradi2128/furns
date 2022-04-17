import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// === Styled Components ===
import {
  DescriptionBox,
  ProductDescriptionTop,
  AddContainer,
  WishlistCompareContainer,
  WishlistCompare,
  ShareSocial,
} from "./index";
import {
  CounterContainer,
  CounterOutput,
  BtnContainer,
  ControlBtn,
} from "../../subComponents/counter/index";
// === Icons ===
import {
  AiOutlineHeart,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";

// === Components ===

import CarouselListProductDetails from "../../components/CarouselProductDetails/CarouselProductDetails";
import Selection from "../../subComponents/Selection/Selection";
import BtnCart from "../../subComponents/BtnCart/BtnCart";

// === Redux ===

import { addToCartCounter } from "../../features/products/CartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/products/WishlistSlice";
import {
  addToCompare,
  removeFromCompare,
} from "../../features/products/CompareSlice";
const ProductDescription = ({ ItemsDetail }) => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const dispatch = useDispatch();

  const handlerAddToCart = (product, counter) => {
    dispatch(addToCartCounter({ ...product, counter: counter }));
  };
  // === Options ===
  const [colorValue, setColorValue] = useState("Gray");
  const [sizeValue, setSizeValue] = useState("Semi Double");
  const [materialValue, setMaterialValue] = useState("Wood");
  // === Counter ===
  const [counter, setCounter] = useState(1);
  //increase counter
  const increase = () => {
    setCounter(counter + 1);
  };

  //decrease counter
  const decrease = () => {
    counter > 1 && setCounter((count) => count - 1);
  };
  // *** Wishlist ***
  // === Add to Wishlist
  const handlerAddToWishlist = (productItem) => {
    dispatch(addToWishlist(productItem));
  };
  // === remove from wishlist
  const handlerRemoveFromWishlist = (productItem) => {
    dispatch(removeFromWishlist(productItem));
  };
  // *** Compare ***
  // === Add to compare
  const handlerAddToCompare = (productItem) => {
    dispatch(addToCompare(productItem));
  };
  // === remove from wishlist
  const handlerRemoveFromCompare = (productItem) => {
    dispatch(removeFromCompare(productItem));
  };
  // === stay in mode compare ===
  useEffect(() => {
    const compareIndex = compareItems.find(
      (element) => element.id === ItemsDetail.id
    );

    if (compareIndex !== undefined) {
      setIsCompare(true);
    }
    const wishlistIndex = wishlistItems.find(
      (element) => element.id === ItemsDetail.id
    );
    if (wishlistIndex !== undefined) {
      setIsWishlist(true);
    }
  }, [ItemsDetail]);

  // === Wishlist and Compare ===
  const [isWishlist, setIsWishlist] = useState(false);
  const [isCompare, setIsCompare] = useState(false);
  return (
    <DescriptionBox>
      <div className="col-md-6 col-lg-5">
        <CarouselListProductDetails img={ItemsDetail.image} />
      </div>
      <div className="col-md-6 col-lg-7">
        <ProductDescriptionTop>
          <p>
            SKU : <span>{ItemsDetail.category}</span>
          </p>
          <p>
            Availability : <span>{ItemsDetail.Availability} in Stock</span>
          </p>
          <h2>{ItemsDetail.title}</h2>
          <h3 className="price">
            {ItemsDetail.discountPrice && (
              <del className="old">${ItemsDetail.discountPrice}</del>
            )}{" "}
            ${ItemsDetail.price}
          </h3>
          <p>{ItemsDetail.description}</p>
        </ProductDescriptionTop>
        {/* === Option === */}
        {ItemsDetail.option && (
          <>
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
          </>
        )}
        <AddContainer>
          <CounterContainer productDetail>
            <BtnContainer productDetail>
              <ControlBtn className="control__btn" onClick={decrease}>
                -
              </ControlBtn>
              <CounterOutput productDetail>{counter}</CounterOutput>
              <ControlBtn className="control__btn" onClick={increase}>
                +
              </ControlBtn>
            </BtnContainer>
          </CounterContainer>
          <BtnCart click={() => handlerAddToCart(ItemsDetail, counter)}>
            Add to Cart
          </BtnCart>
        </AddContainer>
        <WishlistCompareContainer>
          <WishlistCompare onClick={() => setIsWishlist(!isWishlist)}>
            <AiOutlineHeart />
            {isWishlist ? (
              <span onClick={() => handlerRemoveFromWishlist(ItemsDetail)}>
                Remove to wishlist
              </span>
            ) : (
              <span onClick={() => handlerAddToWishlist(ItemsDetail)}>
                Add to wishlist
              </span>
            )}
          </WishlistCompare>
          <WishlistCompare onClick={() => setIsCompare(!isCompare)}>
            <BiGitCompare />
            {isCompare ? (
              <span onClick={() => handlerRemoveFromCompare(ItemsDetail)}>
                Remove to Compare
              </span>
            ) : (
              <span onClick={() => handlerAddToCompare(ItemsDetail)}>
                Add to Compare
              </span>
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
  );
};

export default ProductDescription;
