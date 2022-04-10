import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px 20px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  background: rgb(235, 235, 235);
  @media screen and (min-width: 576px) {
     {
      flex-direction: row;
    }
  }
`;
export const Left = styled.div``;
export const Right = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
export const SortContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 45px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  border: 1px solid ${(props) => (props.isOpen ? "rgb(255, 112, 4)" : "white")};
  min-width: 220px;
  min-height: 40px;
`;
export const SortLeft = styled.div``;
export const SortRight = styled.div`
  cursor: pointer;
  color: rgb(204, 204, 204);
  display: flex;
  padding: 8px;
  transition: color 150ms ease 0s;
  svg {
    font-size: 20px;
    color: ${(props) =>
      props.isOpen ? "#000" : "rgb(204, 204, 204)"} !important;
  }
`;
export const Input = styled.input`
  width: 100%;
  border: 0px;
  font-size: inherit;
  opacity: 1;
  outline: 0px;
  padding: 0 1rem;
`;
export const ListContainer = styled.ul`
  position: absolute;
  z-index: 100;
  top: 41px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 45px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  border: 1px solid rgb(235, 235, 235);
`;
export const Li = styled.li`
  display: block;
  width: 100%;
  padding: 0.7rem;
  &:hover {
    background: rgb(255, 112, 4);
    color: white;
  }
`;
