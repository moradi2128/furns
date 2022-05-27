import React from "react";
// === Components ===
import CloseIcon from "../../subComponents/CloseIcon/CloseIcon";

// === Styled Components ===
import {
  ModalSection,
  ModalBackdrop,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalHeaderContainer,
} from "./index";

const Modal = ({ title, isOpen, setIsOpen, children, modalTop }) => {
  return (
    <ModalSection isOpen={isOpen}>
      <ModalBackdrop onClick={() => setIsOpen(false)} isOpen={isOpen} />
      <ModalContainer isOpen={isOpen} modalTop={modalTop}>
        <ModalHeader modalTop={modalTop}>
          <ModalHeaderContainer modalTop={modalTop}>
            <ModalTitle>{title}</ModalTitle>
            <CloseIcon click={() => setIsOpen(false)} />
          </ModalHeaderContainer>
        </ModalHeader>
        {children}
      </ModalContainer>
    </ModalSection>
  );
};

export default Modal;
