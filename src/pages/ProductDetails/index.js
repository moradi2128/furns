// === Styled Components ===
import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  gap: 2rem;
`;
export const InfoItem = styled.li`
  display: block;
  font-size: 14px;
  margin-bottom: 1rem;
  :last-child {
    margin-bottom: 0;
  }
  span {
    min-width: 70px;
    margin: 0px 26px 0px 0px;
    display: inline-block;
    color: rgb(33, 33, 33);
    font-weight: 500;
  }
`;
export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
  
`;