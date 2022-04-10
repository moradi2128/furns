// === Styled Components ===
import styled from "styled-components";

export const HeaderAbout = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 700;
    color: rgb(33, 33, 33);
    font-family: Raleway;
  }
`;
export const BodyAbout = styled.div`
  margin: 40px 0;
  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: unset;
    }
  }
`;
export const AboutItem = styled.div`
padding:0 1rem;
overflow: hidden;
width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
  }
`;
export const Description = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: unset;
  }
  div {
    h4 {
      font-size: 20px;
      margin-bottom: 15px;
      font-weight: 600;
    }
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      padding: 1rem;
    }
  }
`;