import styled from "styled-components";

export const CloseIconContainer = styled.span`
  position: relative;
  width: ${(props) => (props.ModalQuickView ? "15px" : "20px")};
  height: ${(props) => (props.ModalQuickView ? "15px" : "20px")};
  cursor: pointer;
  &:before,
  &:after {
    content: "";
    transition: all 0.3s ease;
    position: absolute;
    width: 2px;
    height: 100%;
    right: 50%;
    background: ${(props) =>
      props.ModalQuickView ? "rgb(255, 255, 255)" : "rgb(255, 112, 4)"};
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
