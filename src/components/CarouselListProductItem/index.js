import styled from "styled-components";

export const Item = styled.a`
  flex-direction: column;
  align-items: center;

  margin: auto;
  width: 130px;
  height: 130px;
  display: flex;
  position: relative;
  justify-content: center;
  transition: all 0.4s ease 0s;
  border-radius: 50%;
  border: 2px solid rgb(67, 71, 78);
  svg {
    width: 30%;
    height: 30%;
  }
  h4 {
    font-weight: 400;
  }
  &:hover {
    color: inherit;
    border-color: transparent;
  }
  &:after {
    content: "";
    inset: -1px;
    opacity: 0;
    z-index: 1;
    position: absolute;
    transition: all 0.4s ease 0s;
    border-radius: 50%;
    border: 2px dashed rgb(255, 112, 4);
  }
  &:hover:after {
    opacity: 1;
    animation: 9s linear 0s infinite normal none running rotate;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 575px) {
     {
      width: 140px;
      height: 140px;
    }
  }
  @media screen and (min-width: 767px) {
     {
      width: 180px;
      height: 180px;
    }
  }
`;
