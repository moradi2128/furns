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

const SecMenu = ({ setIsOpenCart }) => {
  return (
    <Footer>
      <FooterContainer className="container">
        <FooterItem>
          <AiOutlineHeart />
          <span>Wishlist</span>
        </FooterItem>
        <FooterItem>
          <BiGitCompare />
          <span>Compare</span>
        </FooterItem>
        <FooterItem>
          <BiHomeAlt />
          <span>Home</span>
        </FooterItem>
        <FooterItem onClick={() => setIsOpenCart(true)}>
          <Badge>0</Badge>
          <AiOutlineShopping />
          <span>Cart</span>
        </FooterItem>
        <FooterItem>
          <AiOutlineUser />
          <span>Account</span>
        </FooterItem>
      </FooterContainer>
    </Footer>
  );
};

export default SecMenu;
