import styled from "styled-components";

export const BtnContainer = styled.button`
  width: ${(props) => props.type === "btnLg" && "100%"};
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;
  display: inline-flex;
  text-align: center;
  padding: ${(props) => (props.type === "btnLg" ? "16px 20px" : "10px 20px")};
  border-radius: 3px;
  line-height: 1;
  border: 0px;
  transition: all 0.4s ease 0s;
  font-size: 12px;
  font-family: Raleway,"Montserrat", sans-serif;
  font-weight: 600;
  color: ${(props) =>
    props.type === "btnLg" ? "rgb(47, 51, 58)" : props.theme.colors.colorWhite};
  background-color: ${(props) =>
    props.type === "btnLg"
      ? "rgb(255, 255, 255)"
      : props.theme.colors.colorPrimary};
  svg {
    margin-right: 0.2rem;
  }
  &:hover {
    color: ${(props) => props.theme.colors.colorPrimary};
    background-color: ${(props) => props.type !== "btnLg" && "rgb(0, 0, 0)"};
  }
  &:disabled {
    cursor: revert;
    background-color: ${(props) =>
      props.type === "btnLg" ? "rgb(255,255,255)" : "rgb(255 155 80)"};
    color: ${(props) => (props.type === "btnLg" ? "rgb(47, 51, 58)" : "white")};
  }
  @media screen and (max-width: 767px) {
    padding: 10px 20px;
  }
`;
