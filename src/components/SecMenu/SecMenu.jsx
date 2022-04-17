import React from "react";
import { Footer, FooterContainer, FooterItem } from "./index";

// === Icons ===
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { BiGitCompare, BiHomeAlt } from "react-icons/bi";

// ===Components ===
import Badge from "../../subComponents/badge/Badge";
import { useSelector } from "react-redux";

const SecMenu = ({ setIsOpenCart }) => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Footer>
      <FooterContainer className="container">
        <FooterItem to="/wishlist">
          <AiOutlineHeart />
          <span>Wishlist</span>
        </FooterItem>
        <FooterItem to="/compare">
          <BiGitCompare />
          <span>Compare</span>
        </FooterItem>
        <FooterItem to="/">
          <BiHomeAlt />
          <span>Home</span>
        </FooterItem>
        <FooterItem onClick={() => setIsOpenCart(true)} as="button" >
          <Badge>{cartItems.length}</Badge>
          <AiOutlineShopping />
          <span>Cart</span>
        </FooterItem>
        <FooterItem to="/signin">
          <AiOutlineUser />
          <span>Account</span>
        </FooterItem>
      </FooterContainer>
    </Footer>
  );
};

export default SecMenu;
