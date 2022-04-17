// === Theme ===
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Theme from "../../Theme/Theme";


export const NavItemSection = styled.nav`
  padding: 15px;
`;

export const NavLi = styled.li`
  font-size: medium;

  cursor: pointer;
  padding: 5px 0;

  & svg {
    color: rgb(153, 153, 153);
    font-size: initial;
  }
`;
export const NavLink = styled(Link)`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;
export const SubItem = styled.ul`
  height: ${(props) => (props.isOpen === props.id ? "100%" : 0)};
  overflow: hidden;
  padding-left: 30px;
`;

export const SubItemUl = styled.li`
  font-size: small;
  padding: 3px 0;
  &:hover {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;
