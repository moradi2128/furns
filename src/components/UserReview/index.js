// === Styled Components ===
import styled from "styled-components";
export const Wrapper = styled.div`
  margin-bottom: 1rem;
  @media screen and (min-width: 992px) {
    display: flex;
    gap: 0.5rem;
    align-items:center;
  }
`;
export const UserProfile = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  flex: 0 0 120px;
  margin: 0px 15px 0px 0px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  color: rgb(71, 71, 71);
  border-radius: 50%;
  border: 1px solid rgb(235, 235, 235);
  svg {
    font-size: 50px;
  }
`;
export const ReviewContent = styled.div`
  width: 100%;
  line-height: 1;
  margin-bottom: 5px;
  font-size: 14px;
  h4 {
    margin-bottom: 7px;
    line-height: 1;
    font-size: 16px;
    font-weight: 500;
    color: rgb(33, 33, 33);
  }
`;
export const Rating = styled.div`
  margin-bottom: 3px;
`;
