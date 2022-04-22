import styled from "styled-components";
export const List = styled.div``;
export const ListHead = styled.div`
  background: rgb(235 235 235);
  ul {
    display: grid;
    grid-template-columns: ${(props) =>
      props.wishlist ? "0.5fr 2fr 1fr 1fr 1fr" : "0.5fr 2fr 1fr 1fr 1fr 1fr"};
    text-align: center;
  }
  li {
    white-space: nowrap;
    text-transform: uppercase;
    color: rgb(33, 33, 33);
    font-size: 14px;
    font-weight: 700;
    background-color: rgb(235, 235, 235);
    border: none !important;
    text-align: center !important;
    padding: 21px 42px 22px !important;
  }
`;
export const ListBody = styled.div`
  border: 1px solid rgb(235, 235, 235);
  & .wishlist {
    width: 100%;
    border-bottom: 1px solid rgb(235, 235, 235);
    padding-bottom: 1rem;
  }
  & .wishlist:last-child {
    border-bottom: none;
  }
  .description-product-title {
    max-width: 255px;
    display: inline-block;
  }
  ul {
    flex-direction: column;
    gap: 1rem;
    justify-content: space-around;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgb(235, 235, 235);
    .cartItem {
      border-bottom: 1px solid #ebebeb;
      width: 100%;
      padding: 1rem 0;
    }
    .cartItem:last-child {
      border-bottom: none;
    }
    :last-child {
      border-bottom: 0;
    }

    @media (min-width: 576px) and (max-width: 991px) {
      .cartItem {
        display: flex;
      }
    }
    .description-product {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      @media screen and (min-width: 768px) {
        flex-direction: row;
      }
      .description-product-price {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        gap: 3rem;
      }
    }
  }

  li {
    .img-container {
      width: 111px;
      height: 111px;
      display: block;
      margin: auto;
      margin-bottom: 0.5rem;
    }
    img {
      display: block;
      margin: auto;
      width: 100%;
      height: 100%;
      object-fit: contain;
      overflow: hidden;
    }
    a {
      color: rgb(33, 33, 33);
      font-weight: 600;
    }
  }

  .action-btn {
    justify-content: center;
    display: flex;
    color: rgb(71, 71, 71);
    font-size: large;
    button {
      cursor: pointer;
      background: unset;
      outline: none;
      border: none;
      padding: 0px;
      margin: 0px 5px;
      font-size: 18px;
      font-size: larger;
      color: rgb(71, 71, 71);
      transition: all 0.3s ease;
      :hover {
        color: rgb(255, 112, 4);
      }
    }
  }
  .tr-footer {
    font-size: 16px;
    font-weight: 700;
    min-width: 200px;
    display: flex;
    justify-content: center;
    color: rgb(255, 112, 4);
    font-family: Raleway;

    span {
      margin-left: 40px;
      color: rgb(33, 33, 33);
    }
  }
  @media screen and (min-width: 768px) {
    .tr-footer {
      align-items: end;
      margin-right: 60px;
    }
  }
  @media screen and (min-width: 992px) {
    border-top: none;
    .img-container {
      margin: 0 !important;
      margin-left: 0.5rem !important;
    }
    ul {
      display: ${(props) => (props.wishlist ? "grid" : "flex")};
      grid-template-columns: ${(props) =>
        props.wishlist ? "0.5fr 2fr 1fr 1fr 1fr" : "1fr 2fr 1fr 1fr 1fr 1fr"};
      flex-direction: column;
      li {
        display: ${(props) => (props.wishlist ? "block" : "grid")};
        ${(props) =>
          !props.wishlist &&
          "grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr"};
        ${(props) => !props.wishlist && "align-items: center"}
      }
    }
  }
`;
export const Property = styled.div`
  margin-top: 3px;
  font-size: 11px;
  text-transform: capitalize;
  color: rgb(153, 153, 153);
  font-weight: 600;
`;
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  background-color: rgb(235, 235, 235);
  @media screen and (max-width: 991px) {
    padding-top: 30px;
    padding-bottom: 30px;
    flex-direction: column;
  }
`;
export const CouponContainer = styled.div`
  width: 100%;
  input {
    height: 48px;
    outline: none;
    border-radius: 3px 0px 0px 3px;
    border-color: rgb(255, 112, 4);
    width: 100%;
    display: block;
    line-height: 1;
    padding: 12px 15px;
    transition: all 0.4s ease 0s;
    border-radius: 3px;
    font-size: 14px;
    border: 1px solid rgb(235, 235, 235);
  }
  input:focus {
    border: 1px solid rgb(255, 112, 4);
  }
  button {
    font-size: small;
    padding: 17px 36px;

    border-radius: 0px 3px 3px 0px;
    height: 48px;
    display: block;
    width: 100%;
  }
  button:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(47, 51, 58);
  }
  @media screen and (min-width: 992px) {
    display: flex;
    align-items: center;
    input {
      width: 100%;
    }
    button {
      margin-top: 0;
      width: 50%;
    }
  }
`;
export const BtnCheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  button {
    font-size: 12px;
    justify-content: center;
    width: 100%;
  }
  button:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(47, 51, 58);
  }
  button:last-child {
    color: rgb(255, 255, 255);
    background-color: rgb(47, 51, 58);
  }
  button:last-child:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(255, 112, 4);
  }
  @media screen and (min-width: 992px) {
    display: flex;

    justify-content: end;

    button {
      margin-top: 0;
      border-radius: 3px;
      margin-left: 1em;
      font-size: smaller;
      width: unset;
    }
  }
`;
