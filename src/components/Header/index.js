import { Link } from "react-router-dom";
import styled from "styled-components";

// === Style components ===

export const HeaderSection = styled.header`
  position: sticky;
  top: 0px;
  z-index: 9999;
  width: 100%;

  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(235, 235, 235);
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 992px) {
    position: unset;
    padding: 30px 0;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  margin-left: 2rem;
  max-width: 90px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 992px) {
    max-width: 155px;
  } ;
`;
export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: x-large;
  padding: 0 10px;
  transition: ${(props) => props.theme.transitions.trMain};
  &:hover svg {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
  @media screen and (min-width: 992px) {
    padding: 0 15px;
  }
`;
export const UlUser = styled.ul`
  visibility: ${(props) => (props.isOpeUser ? "visible" : "hidden")};
  font-size: 14px;
  padding: 0 1rem;
  opacity: ${(props) => (props.isOpeUser ? 1 : 0)};
  margin: 0px;
  top: ${(props) => (props.isOpeUser ? "34px" : "45px")};
  border: none;
  min-width: 130px;
  border-radius: 0px;
  overflow: hidden;
  position: absolute;
  z-index: 100;
  transition: all 0.4s ease 0s;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 6%) 0px 3px 25.5px 4.5px;
  right: 0px;
  left: 50%;
  transform: translateX(-50%);
`;
export const LIUser = styled.li`
  padding: 0.7rem 0;
  :not(:last-child) {
    border-bottom: 1px solid rgb(235, 235, 235);
  }
  a {
    display: block;
  }
`;
export const BackDrop = styled.div`
  border: none !important;
  cursor: default;
  z-index: 10;
  background: transparent;
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
`;
export const IconContainerLeft = styled.div`
  min-width: 65px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: x-large;
  transition: ${(props) => props.theme.transitions.trMain};
  &:hover svg {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;
export const HeaderContainerRight = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  justify-content: flex-end;

  & div:nth-child(2) {
    border-left: 2px solid rgb(235, 235, 235);
  }
  @media screen and (min-width: 992px) {
    & div:nth-child(2) {
      border-right: 2px solid rgb(235, 235, 235);
    }
  }
`;
export const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
