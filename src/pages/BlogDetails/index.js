// === Styled Components ===
import styled from "styled-components";
export const Figure = styled.figure`
  width: 100%;
  overflow: hidden;
  height: 480px;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 576px) {
    height: auto;
  }
`;
export const Section = styled.section`
  iframe {
    margin: 1rem 0;
  }
  p {
    margin-bottom: 1rem;
  }
`;
export const BlockQuote = styled.blockquote`
  margin: 40px 100px;
  padding: 0px 15px;
  line-height: 1.8;
  font-style: italic;
  border-left: 3px solid rgb(255, 112, 4);
  @media screen and (max-width: 767px) {
     {
      margin: 20px 50px;
    }
  }
  @media screen and (max-width: 575px) {
     {
      margin-right: 0px;
      margin-left: 30px;
    }
  }
`;
export const Footer = styled.footer`
  border-top: 1px solid rgb(235, 235, 235);
  display: flex;
  margin-top: 30px;
  padding-top: 35px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgb(235, 235, 235);
  div {
    margin-bottom: 0.5rem;
  }
  div,
  ul {
    display: flex;
    gap: 0.6rem;
  }
  li {
    color: rgb(71, 71, 71);
  }
  span {
    margin-right: 5px;
    font-weight: 600;
  }
  @media screen and (max-width: 575px) {
     {
      display: block;
    }
  }
`;