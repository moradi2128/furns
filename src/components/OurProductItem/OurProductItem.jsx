import React, { useState, useEffect } from "react";

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

  return (
    <Card className="col-6 col-md-4 col-lg-3" key={item.id}>
      <CardContainer>
        <Figure>
          <CardImgContainer>
            <CardImgLink href="/">
              {matchesM && (
                <ActionIcons
                  className="toCartAction"
                  onClick={(e) => e.preventDefault()}
                >
                  <IconContainer
                    className="toCartActionItem"
                    onClick={() => setIsHeart(!isHeart)}
                  >
                    <AiOutlineHeart className={isHeart && "vis-hide"} />
                    <BiTrashAlt className={isHeart && "vis-show"} />
                  </IconContainer>
                  <IconContainer className="toCartActionItem">
                    <MdZoomOutMap />
                  </IconContainer>
                  <IconContainer
                    className="toCartActionItem"
                    onClick={() => setIsCompare(!isCompare)}
                  >
                    <BiGitCompare className={isCompare && "vis-hide"} />
                    <BiTrashAlt className={isCompare && "vis-show"} />
                  </IconContainer>
                </ActionIcons>
              )}
              {matchesLg && (
                <BtnContainer
                  className="show-btn"
                  onClick={(e) => e.preventDefault()}
                >
                  <BtnCart
                    type="btnLg"
                    href={item.href && item.href}
                    stockOut={item.stockOut}
                  >
                    <HiShoppingCart />
                    {item.stockOut
                      ? "Out of Stock"
                      : item.href
                      ? "Add Cart"
                      : "Select option"}
                  </BtnCart>
                </BtnContainer>
              )}
              {item.discountPercent && (
                <BadgeDiscount>-{item.discountPercent}</BadgeDiscount>
              )}
              {item.stockOut && (
                <BadgeDiscount stockOut >STOCK OUT</BadgeDiscount>
              )}
              <ImgThumb className="thumb">
                <Img src={item.img} />
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
          <CardBodyTitle href="/">{item.title}</CardBodyTitle>
          <Price>
            {item.discountPrice && (
              <DiscountPrice>${item.discountPrice}</DiscountPrice>
            )}
            ${item.price}
          </Price>
          {!matchesM && (
            <ActionIcons>
              <IconContainer onClick={() => setIsHeart(!isHeart)}>
                <AiOutlineHeart className={isHeart && "vis-hide"} />
                <BiTrashAlt className={isHeart && "vis-show"} />
              </IconContainer>
              <MdZoomOutMap />
              <IconContainer onClick={() => setIsCompare(!isCompare)}>
                <BiGitCompare className={isCompare && "vis-hide"} />
                <BiTrashAlt className={isCompare && "vis-show"} />
              </IconContainer>
            </ActionIcons>
          )}
          {!matchesLg && (
            <BtnCart href={item.href && item.href} stockOut={item.stockOut}>
              <HiShoppingCart />
              {item.stockOut
                ? "Out of Stock"
                : item.href
                ? "Add Cart"
                : "Select option"}
            </BtnCart>
          )}
        </CardBody>
      </CardContainer>
    </Card>
  );
};

export default OurProductItem;
