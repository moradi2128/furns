import styled from "styled-components"
export const OurProductsHeader = styled.div`
  text-align: center;
  h2 {
    font-size: xx-large;
    margin-bottom: 1rem;
  }
  p {
    margin: auto;
    max-width: 465px;
    margin-bottom: 1rem;
  }
`;
export const OurProductsTab = styled.div``;
export const TabList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const TabListItem = styled.li`
  cursor: pointer;
  padding: 0px;
  font-size: 15px;
  margin-right: 30px;
  vertical-align: top;
  display: block;
  text-transform: capitalize;
  color: rgb(71, 71, 71);
  transition: all 0.4s ease 0s;
  font-weight: 600;
  &.active {
    color: rgb(255, 112, 4);
  }
`;
export const TabBody = styled.div`
  padding: 0px;
  font-size: 15px;
  vertical-align: top;
  display: block;
  text-transform: capitalize;
  color: rgb(71, 71, 71);
  transition: all 0.4s ease 0s;
  font-weight: 600;
  &.active {
    color: rgb(255, 112, 4);
  }
`;