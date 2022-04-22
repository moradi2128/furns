import styled from "styled-components";
import { Link } from "react-router-dom";
export const BtnContainer = styled(Link)`
  cursor: pointer;
  margin-top: 10px;
  display: inline-flex;
  text-align: center;
  padding: ${(props) => (props.type === "news" ? "15px 25px" : "17px 36px")};
  border-radius: 0;
  line-height: 1;
  border: 0px;
  transition: all 0.4s ease 0s;
  font-size: 15px;
  font-family: Raleway, "Montserrat", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.colorWhite};
  background-color: ${(props) =>
    props.type === "news"
      ? "rgb(71, 71, 71)"
      : props.theme.colors.colorPrimary};
  svg {
    margin-right: 0.2rem;
  }
  &:hover {
    color: ${(props) =>
      props.type === "news"
        ? props.theme.colors.colorWhite
        : props.theme.colors.colorPrimary};
    background-color: ${(props) =>
      props.type === "news" ? props.theme.colors.colorPrimary : "rgb(0, 0, 0)"};
  }
  @media screen and (max-width: 767px) {
    padding: 15px 25px;
  }
`;
