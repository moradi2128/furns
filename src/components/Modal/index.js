// === Theme ===
import styled from "styled-components";

// === Icons ===
// import { AiOutlineClose } from "react-icons/ai";

// === Style Components ===

export const ModalSection = styled.aside`
  position: fixed;
  top: 0px;
  right: 0px;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  transition: all 0.4s ease 0s;
  font-size: 14px;
  font-weight: 400;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;
export const ModalBackdrop = styled.div`
  position: absolute;
  z-index: -1;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: 100%;
  width: 100%;
  //   hide and show
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.isOpen ? "visible" : "hidden")};
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalContainer = styled.div`
  ${(props) => props.modalTop === "true" && "display:flex"};
  ${(props) => props.modalTop === "true" && "flex-direction:column-reverse"};
  width: 100%;
  height: ${(props) => (props.modalTop === "true" ? "auto" : "100%")};
  max-width: ${(props) => (props.modalTop === "true" ? "unset" : "385px")};
  margin-left: auto;
  position: relative;
  transform: ${(props) =>
    props.modalTop === "true"
      ? props.isOpen
        ? "translateY(0px)"
        : "translateY(-100%)"
      : props.isOpen
      ? "translateX(0px)"
      : "translateX(100%)"};
  transition: all 0.4s ease 0s;
  background-color: rgb(255, 255, 255);
`;
export const ModalHeader = styled.header`
  padding: ${(props) => (props.modalTop === "true" ? "15px 0" : "30px 0")};
  border-bottom: 1px solid rgb(235, 235, 235);
`;
export const ModalTitle = styled.div`
  font-size: 20px;
  color: rgb(33, 33, 33);
  font-weight: 700;
`;
export const ModalHeaderContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.modalTop === "true" ? "center" : "space-between"};
  align-items: center;
  padding: 0 15px;
`;
