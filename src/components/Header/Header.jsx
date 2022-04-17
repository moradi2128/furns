import React, { useState, useEffect } from "react";

// === Assets ===
import logo from "../../assets/images/logo.png";
// === Styled Components ===
import {
  HeaderSection,
  HeaderContainer,
  Logo,
  LogoLink,
  LogoImg,
  IconContainer,
  IconContainerLeft,
  HeaderContainerRight,
  CartContainer,
  UlUser,
  LIUser,
  BackDrop,
} from "./index";

// === Icons ===
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineShopping,
} from "react-icons/ai";

// === Components ===
import Theme from "../../Theme/Theme";
import Modal from "../Modal/Modal";
import NavListSidebar from "../NavListSidebar/NavListSidebar";
import NavList from "../NavList/NavList";
import FormSearch from "../FormSearch/FormSearch";
import Badge from "../../subComponents/badge/Badge";
import CartModal from "../CartModal/CartModal";
import SecMenu from "../SecMenu/SecMenu";
import CartCounterShow from "../../subComponents/CartCounterShow/CartCounterShow";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpeUser, setIsOpenUser] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
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
    <Theme>
      <HeaderSection>
        <HeaderContainer className="container">
          {!matchesLg && (
            <IconContainerLeft onClick={() => setIsOpen(true)}>
              <AiOutlineMenu />
            </IconContainerLeft>
          )}
          <Logo>
            <LogoLink to="/">
              <LogoImg src={logo} alt="logo" />
            </LogoLink>
          </Logo>
          <HeaderContainerRight>
            <IconContainer onClick={() => setIsOpenSearch(true)}>
              <AiOutlineSearch />
            </IconContainer>
            {matchesLg && (
              <IconContainer>
                <AiOutlineUser onClick={() => setIsOpenUser(!isOpeUser)} />
                {isOpeUser && (
                  <BackDrop onClick={() => setIsOpenUser(false)}></BackDrop>
                )}
                <UlUser isOpeUser={isOpeUser}>
                  <LIUser>
                    <Link to="/signin" onClick={()=>setIsOpenUser(false)}>Sign In</Link>
                  </LIUser>
                  <LIUser>
                    <Link to="/cart" onClick={()=>setIsOpenUser(false)}>Cart</Link>
                  </LIUser>
                  <LIUser>
                    <Link to="/wishlist" onClick={()=>setIsOpenUser(false)}>Wishlist</Link>
                  </LIUser>
                  <LIUser>
                    <Link to="/Compare" onClick={()=>setIsOpenUser(false)}>Compare</Link>
                  </LIUser>
                </UlUser>
              </IconContainer>
            )}
            <IconContainer>
              {matchesLg ? (
                <CartContainer onClick={() => setIsOpenCart(true)}>
                  <AiOutlineShopping />
                  <Badge>{cartItems.length}</Badge>
                </CartContainer>
              ) : (
                <AiOutlineSetting />
              )}
            </IconContainer>
          </HeaderContainerRight>
        </HeaderContainer>
      </HeaderSection>

      {/* Modal */}
      {!matchesLg ? (
        <Modal title="FURNS" setIsOpen={setIsOpen} isOpen={isOpen}>
          <NavListSidebar />
        </Modal>
      ) : (
        <NavList />
      )}
      <Modal setIsOpen={setIsOpenSearch} isOpen={isOpenSearch} modalTop="true">
        <FormSearch />
      </Modal>
      <Modal title="Cart" setIsOpen={setIsOpenCart} isOpen={isOpenCart}>
        <CartModal setIsOpenCart={setIsOpenCart} />
      </Modal>

      {/* === secund Menu === */}
      {!matchesLg ? (
        <SecMenu setIsOpenCart={setIsOpenCart} />
      ) : (
        <CartCounterShow setIsOpenCart={setIsOpenCart} />
      )}
    </Theme>
  );
};

export default Header;
