import styled from "styled-components";
export const Slider = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  padding: 50px 0px;
  background-color: rgb(231, 231, 231);
  height: 100%;
  display: flex;
  @media screen and (min-width: 576px) {
    height: 533px;
  }
  @media screen and (min-width: 767px) {
    height: calc(100vh - 105px);
  }
  @media screen and (max-width: 991px) {
  }
`;
export const SliderContainer = styled.div`
  @media screen and (min-width: 576px) {
    justify-content: space-around;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1rem;
  }
`;
export const Description = styled.div`
  text-align: start;
  a {
    margin-top: 1rem;
  }
  & h4 {
    font-size: 24px;
    line-height: 1;
    color: rgb(71, 71, 71);
    font-weight: 600;
  }
  & h2 {
    font-size: 72px;
    margin-bottom: 10px;
    font-weight: 700;
    @media screen and (max-width: 991px) {
      font-size: 50px;
    }
    @media screen and (max-width: 767px) {
      font-size: 32px;
  }
  & p {
    color: rgb(71, 71, 71);
    max-width: 470px;
  }
 
`;
