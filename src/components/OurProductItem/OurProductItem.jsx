import React, { useState, useEffect } from "react";
// === Redux action ====
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../../features/products/CartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/products/WishlistSlice";
import {
  addToCompare,
  removeFromCompare,
} from "../../features/products/CompareSlice";
// === Styled Components ===
import {
  Card,
  CardContainer,
  Figure,
  CardImgContainer,
  CardImgLink,
  ImgThumb,
  Img,
  ImgThumbHover,
  CardBody,
  CardBodyTitle,
  Price,
  DiscountPrice,
  ActionIcons,
  IconContainer,
  BtnContainer,
  IconTooltip,
} from "./index";

//  ===Icons ===
import { AiOutlineHeart } from "react-icons/ai";
import { BiTrashAlt, BiGitCompare } from "react-icons/bi";
import { MdZoomOutMap } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
// === Components ===
import BadgeDiscount from "../../subComponents/BadgeDiscount/BadgeDiscount";
import BtnCart from "../../subComponents/BtnCart/BtnCart";

const OurProductItem = ({ item }) => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const dispatch = useDispatch();

  const [isHeart, setIsHeart] = useState(false);
  const [isCompare, setIsCompare] = useState(false);
  // === Media Query 768 px ===
  const [matchesM, setMatchesM] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatchesM(e.matches));
  }, []);
  // === Media Query 992 px ===
  const [matchesLg, setMatchesLg] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setMatchesLg(e.matches));
  }, []);

  // === Add to cart
  const handlerAddToCart = (productItem, e) => {
    dispatch(addToCard(productItem));
    e.preventDefault();
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
  // === stay in mode wishlist ===
  useEffect(() => {
    const wishlistIndex = wishlistItems.find(
      (element) => element.id === item.id
    );
    if (wishlistIndex !== undefined) {
      setIsHeart(true);
    }
  }, []);

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
    const compareIndex = compareItems.find((element) => element.id === item.id);
    if (compareIndex !== undefined) {
      setIsCompare(true);
    }
  }, []);
  return (
    <Card className="col-6 col-md-4 col-lg-3" key={item.id}>
      <CardContainer>
        <Figure>
          <CardImgContainer>
            <CardImgLink to={`/product/${item.id}`}>
              {matchesM && (
                <ActionIcons
                  className="toCartAction"
                  onClick={(e) => e.preventDefault()}
                >
                  <IconContainer
                    className="toCartActionItem"
                    onClick={() => setIsHeart(!isHeart)}
                  >
                    <IconTooltip>{isHeart ? "Remove" : "Add"} to Wishlist</IconTooltip>
                    <AiOutlineHeart
                      className={isHeart && "vis-hide"}
                      onClick={() => handlerAddToWishlist(item)}
                    />
                    <BiTrashAlt
                      className={isHeart && "vis-show"}
                      onClick={() => handlerRemoveFromWishlist(item)}
                    />
                  </IconContainer>
                  <IconContainer className="toCartActionItem">
                    <IconTooltip>Quick View</IconTooltip>
                    <MdZoomOutMap />
                  </IconContainer>
                  <IconContainer
                    className="toCartActionItem"
                    onClick={() => setIsCompare(!isCompare)}
                  >
                    <IconTooltip>
                      {isCompare ? "Remove" : "Add"} to Compare
                    </IconTooltip>
                    <BiGitCompare
                      className={isCompare && "vis-hide"}
                      onClick={() => handlerAddToCompare(item)}
                    />
                    <BiTrashAlt
                      className={isCompare && "vis-show"}
                      onClick={() => handlerRemoveFromCompare(item)}
                    />
                  </IconContainer>
                </ActionIcons>
              )}
              {matchesLg && (
                <BtnContainer className="show-btn">
                  {item.option ? (
                    <BtnCart type="btnLg" href={`/product/${item.id}`}>
                      Select option
                    </BtnCart>
                  ) : item.stockOut ? (
                    <BtnCart type="btnLg" stockOut>
                      <HiShoppingCart />
                      Out of Stock
                    </BtnCart>
                  ) : (
                    <BtnCart
                      type="btnLg"
                      click={(e) => handlerAddToCart(item, e)}
                    >
                      <HiShoppingCart />
                      Add Cart
                    </BtnCart>
                  )}
                </BtnContainer>
              )}
              {item.discountPercent && (
                <BadgeDiscount>-{item.discountPercent}</BadgeDiscount>
              )}
              {item.stockOut && (
                <BadgeDiscount stockOut>STOCK OUT</BadgeDiscount>
              )}
              <ImgThumb className="thumb">
                <Img src={item.image} />
              </ImgThumb>
              {item.imgHover && (
                <ImgThumbHover className="thumb-hover">
                  <Img src={item.imgHover} />
                </ImgThumbHover>
              )}
            </CardImgLink>
          </CardImgContainer>
        </Figure>
        <CardBody>
          <CardBodyTitle to={`/product/${item.id}`}>{item.title}</CardBodyTitle>
          <Price>
            {item.discountPrice && (
              <DiscountPrice>${item.discountPrice}</DiscountPrice>
            )}
            ${item.price}
          </Price>
          {!matchesM && (
            <ActionIcons>
              <IconContainer onClick={() => setIsHeart(!isHeart)}>
                <AiOutlineHeart
                  className={isHeart && "vis-hide"}
                  onClick={() => handlerAddToWishlist(item)}
                />
                <BiTrashAlt
                  className={isHeart && "vis-show"}
                  onClick={() => handlerRemoveFromWishlist(item)}
                />
              </IconContainer>
              <MdZoomOutMap />
              <IconContainer onClick={() => setIsCompare(!isCompare)}>
                <BiGitCompare
                  className={isCompare && "vis-hide"}
                  onClick={() => handlerAddToCompare(item)}
                />
                <BiTrashAlt
                  className={isCompare && "vis-show"}
                  onClick={() => handlerRemoveFromCompare(item)}
                />
              </IconContainer>
            </ActionIcons>
          )}
          {!matchesLg &&
            (item.option ? (
              <BtnCart href={`/product/${item.id}`}>Select option</BtnCart>
            ) : item.stockOut ? (
              <BtnCart stockOut>
                <HiShoppingCart />
                Out of Stock
              </BtnCart>
            ) : (
              <BtnCart click={() => handlerAddToCart(item)}>
                <HiShoppingCart />
                Add Cart
              </BtnCart>
            ))}
        </CardBody>
      </CardContainer>
    </Card>
  );
};

export default OurProductItem;
