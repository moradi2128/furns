import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  align-items: center;
  svg {
    font-size: 100px;
    color: rgb(255, 112, 4);
  }
  h2 {
    font-size: 20px;
    color: rgb(33, 33, 33);
    margin-top: 15px;
    font-weight: 600;
  }
  @media screen and (max-width: 576px) {
    padding:3rem 0;
    h2 {
      font-size: 14px;
    }
  }
`;
