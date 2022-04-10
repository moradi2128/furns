// === Theme ===
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Theme from "../../Theme/Theme";

export const NavItemSection = styled.nav`
  background: rgb(47, 51, 58);
`;
export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
`;
export const NavLi = styled.li`
  position: relative;
  font-size: medium;
  cursor: pointer;
  padding: 15px 0;
  transition: all 0.3s ease;

  & svg {
    color: rgb(153, 153, 153);
    font-size: initial;
  }
  &:hover ul {
    pointer-events: visible;
    transform: none;
    opacity: 1;
    visibility: visible;
  }
`;
export const NavLink = styled.a`
  color: white;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  & svg {
    color: white;
  }
  &:hover {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
  &:hover svg {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;
export const SubItem = styled.ul`
  position: absolute;
  top: 50px;

  background-color: rgb(255, 255, 255);
  position: absolute;
  z-index: 2;
  text-align: left;
  min-width: 205px;
  left: auto;
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 3.76px 0.24px;
  transform-style: preserve-3d;
  transform: rotateX(-75deg);
  transform-origin: 0px 0px;
  transition: transform 0.4s ease 0s, opacity 0.3s ease 0s;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
`;

export const SubItemUl = styled.li`
  padding: 1rem !important;
  border-bottom: 1px solid #e9e9e9;
  font-size: small;
  padding: 3px 0;
  &:hover {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
  &:last-child {
    border-bottom: none;
  }
`;
