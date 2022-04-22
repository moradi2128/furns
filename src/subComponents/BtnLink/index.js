import styled from "styled-components";
import { Link } from "react-router-dom";
export const BtnContainer = styled(Link)`
  display: inline-block;
  text-align: center;
  padding: 17px 36px;
  border-radius: 0px;
  line-height: 1;
  border: 0px;
  transition: all 0.4s ease 0s;
  font-size: 16px;
  font-family: Raleway,"Montserrat", sans-serif;
  font-weight: 600;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 112, 4);

  svg {
    margin-right: 0.2rem;
  }
  &:hover {
    color: ${(props) => props.theme.colors.colorWhite};
    background-color: rgb(0, 0, 0);
  }
  @media screen and (max-width: 767px) {
    padding: 15px 25px;
  }
`;
