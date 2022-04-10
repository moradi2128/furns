// === Styled Components ===
import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  gap: 2rem;
`;
export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;
export const ProductDescriptionTop = styled.div`
  margin: 1rem 0;

  p {
    line-height: 1;
    font-size: 13px;
    color: rgb(33, 33, 33);
    font-weight: 600;
    margin-bottom: 0.5rem;
    span {
      font-weight: 400;
    }
  }
  p:last-child {
    line-height: unset;
    font-size: unset;
    font-weight: unset;
    max-height: 100px;
    overflow: hidden;
  }
  h2 {
    line-height: 1;
    font-size: 24px;
    margin: 15px 0px;
    color: rgb(33, 33, 33);
    font-weight: 600;
  }
  h3 {
    font-size: 22px;
    margin-top: 15px;
    margin-bottom: 20px;
    color: rgb(33, 33, 33);
    font-weight: 500;
  }
  .old {
    margin-right: 5px;
    color: rgb(153, 153, 153);
  }
  @media screen and (max-width: 575px) {
    h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    h3 {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & > button {
    padding: 12px 20px;
    margin-top: unset;
    border-radius: 0;
  }
  & > button:hover {
    background-color: rgb(47, 51, 58);
    color: white;
  }
`;
export const WishlistCompareContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;
export const WishlistCompare = styled.button`
  text-align: start;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0px;
  border: none;
  line-height: 1;
  color: rgb(71, 71, 71);
  font-size: 14px;
  transition: all 0.3s ease;
  :hover {
    color: rgb(255, 112, 4);
  }
  span {
    margin-left: 0.5rem;
  }
`;
export const ShareSocial = styled.div`
  margin: 0.5rem 0;
  color: rgb(71, 71, 71);
  display: flex;
  gap: 1rem;
  align-items: center;
  h4 {
    color: rgb(71, 71, 71);
    font-size: 14px;
    font-weight: 700;
  }
  a {
    font-size: larger;
    display: flex;
    align-items: center;
  }
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