import styled from "styled-components";

export const Wrapper = styled.aside`
  position: fixed;
  display: ${(state) => (state.status ? "flex" : "none")};
  inset: 0px;
  z-index: 9999;
  outline: 0px;
  justify-content: center;
  align-items: center;
`;
export const BackDrop = styled.div`
  position: fixed;
  inset: 0px;
  z-index: 2040;
  cursor: pointer;
  background-color: rgb(0, 0, 0);

  opacity: ${(state) => (state.status ? "0.5" : "0")};
`;
export const Body = styled.div`
  position: relative;
  z-index: 2050;
  width: 80%;
  margin: auto;
  // overflow: hidden auto;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(41, 43, 44);
  background-color: rgb(255, 255, 255);
  // === Hide ===
  transition: transform 0.3s ease-out 0s;
  transform: translate(0px, -25%);
  // === Show ===

  &.show-quick {
    transform: translate(0px, 0px);
  }
  @media (min-width: 576px) {
     {
      max-width: 500px;
      margin: 30px auto;
    }
  }
  @media (min-width: 768px) {
     {
      max-width: 750px;
    }
  }
  @media (min-width: 992px) {
     {
      max-width: 960px;
    }
  }
`;
export const ModalContact = styled.div`
  height: 80vh;
  padding: 1rem;
  // overflow: hidden auto;
`;
export const CloseIconContainer = styled.button`
  border: none;
  outline: none;
  position: absolute;
  top: -12px;
  right: -12px;
  width: 25px;
  height: 25px;
  background: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgb(255, 112, 4);
`;
export const ProductBody = styled.div`
  overflow: ${(state) =>
    Array.isArray(state.ItemsDetail.image) ? "hidden auto" : "hidden"};
  height: 100%;
`;
