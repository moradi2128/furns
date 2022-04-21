import { Link } from "react-router-dom";
import styled from "styled-components";
export const Table = styled.div`
  overflow-x: auto;
  display: grid;
  grid-template-rows: 4fr 1fr 1fr 1fr 1fr 1fr;
`;
export const TrTable = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgb(236, 238, 239);

  border-bottom: 0;
  &:last-child {
    border-bottom: 1px solid rgb(236, 238, 239);
  }
`;
export const ThTable = styled.div`
  svg {
    cursor: pointer;
    color: rgb(33, 33, 33);
    font-size: medium;
    margin-bottom: 1rem;
    :hover {
      color: rgb(255, 112, 4);
    }
  }
  &:first-child {
    border-right: 1px solid rgb(236, 238, 239);
    padding-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    min-width: 150px;
    font-size: 16px;
    color: rgb(33, 33, 33);
    font-weight: 600;
    height: 100%;
    text-align: center;
  }
  &.thItem {
    padding: 20px;
    height: 100%;
    border-right: 1px solid rgb(236, 238, 239);
    // max-width: 540px;
    width: 100%;
    min-width: 500px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    line-height: 1.7;
    color: rgb(71, 71, 71);
    font-size: 14px;
    text-align: left !important;
    white-space: normal !important;
  }
  & .thDescription {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &.thPrice {
    font-weight: 600;
  }
  a,
  button {
    padding: 10px 0px;
  }
  &.btn-compare a,
  &.btn-compare button {
    margin: 0;
    padding: 10px 15px;
  }
  span {
    font-weight: 500;
  }
`;
export const ImgContainer = styled(Link)`
  display: block;
  width: 250px;
  height: 250px;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const TitleProduct = styled(Link)`
  display: block;
  margin-top: 10px;
  color: rgb(33, 33, 33);
  font-weight: 600;
`;
