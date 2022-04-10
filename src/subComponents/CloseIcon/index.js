import styled from "styled-components";
export const CloseIcon = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:before,
  &:after {
    content: "";
    transition: all 0.3s ease;
    position: absolute;
    width: 2px;
    height: 100%;
    right: 50%;
    background: ${(props) => props.theme.colors.colorPrimary};
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:hover:before {
    transform: rotate(90deg);
  }
  &:hover:after {
    transform: rotate(90deg);
  }
`;
