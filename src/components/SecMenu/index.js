import styled from "styled-components";


  // === Footer Header ===
  export const Footer = styled.div`
    left: 0px;
    bottom: 0px;
    z-index: 99;
    width: 100%;
    position: fixed;
    box-shadow: rgb(0 0 0 / 30%) 0px 0px 10px 0px;
    background-color: rgb(47, 51, 58);
  `;
  export const FooterContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  export const FooterItem = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    margin: 0px;
    padding: 0px;
    color: white;
    line-height: 1;
    font-size: 20px;
    text-align: center;
    transition: all 0.4s ease 0s;
    & span {
      display: block;
      font-size: x-small;
    }
    &:hover {
      color: rgb(255, 112, 4);
    }
  `;