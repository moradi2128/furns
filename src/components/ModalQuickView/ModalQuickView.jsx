import React from "react";
import { useDispatch, useSelector } from "react-redux";
// === Styled Components ===
import {
  Wrapper,
  BackDrop,
  Body,
  ModalContact,
  CloseIconContainer,
  ProductBody,
} from "./index";
import { removeFetchAsyncQuickViewItem } from "../../features/products/QuickViewSlice";
// === Components ===
import ProductDescription from "../ProductDescription/ProductDescription";
import CloseIcon from "../../subComponents/CloseIcon/CloseIcon";

const ModalQuickView = () => {
  const dispatch = useDispatch();
  const { quickViewItem, status } = useSelector((state) => state.quickView);

  const handlerCloseModal = () => {
    dispatch(removeFetchAsyncQuickViewItem());
  };
  return (
    <Wrapper status={status}>
      <Body className={status && "show-quick"}>
        <ModalContact>
          <CloseIconContainer onClick={() => handlerCloseModal()}>
            <CloseIcon ModalQuickView />
          </CloseIconContainer>
          <ProductBody ItemsDetail={quickViewItem}>
            <ProductDescription ItemsDetail={quickViewItem} />
          </ProductBody>
        </ModalContact>
      </Body>
      <BackDrop status={status} onClick={() => handlerCloseModal()} />
    </Wrapper>
  );
};

export default ModalQuickView;
