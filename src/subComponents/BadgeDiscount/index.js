import styled from "styled-components";

export const BadgeDiscountBtn = styled.span`
  position: absolute;
  top: ${(props) => (props.stockOut ? "39px" : "10px")};
  left: 10px;
  z-index: 100;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  display: block;
  padding: 5px 7px;
  text-align: center;
  text-transform: uppercase;
  width: auto;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: ${(props) =>
    props.stockOut ? "rgb(255, 112, 4)" : "rgb(220, 53, 69)"};
  @media screen and (max-width: 575px) {
    font-size: 11px;
    padding: 3px 4px;
    top: ${(props) => props.stockOut && "33px"};
  }
`;
