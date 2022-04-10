import styled from "styled-components";

export const CounterContainer = styled.div`
  margin: 0.5rem 0;
  display: inline-block;
  background-color: ${(props) =>
    props.productDetail ? "unset" : "rgb(243, 244, 246)"};
`;
export const CounterOutput = styled.span`

min-width:${(props) => (props.productDetail ? "50px" : "20px")};
${(props) =>
  props.productDetail &&
  "border-left : 1px solid rgb(255, 112, 4) ; border-right : 1px solid rgb(255, 112, 4)"};
  font-size: 15px;
  display:flex;
  justify-content: center;
    align-items: center;
}
`;
export const BtnContainer = styled.div`
  ${(props) => props.productDetail && "border : 1px solid rgb(255, 112, 4)"};
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const ControlBtn = styled.button`
  outline: none;
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  background-color: transparent;
  color: gray;
  cursor: pointer;
  transition: 0.2s ease-in-out;
`;
