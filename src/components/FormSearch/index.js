import styled from "styled-components";
// === StyledComponents ===
export const FormContainer = styled.div`
  width: 95%;
  margin: auto;
  padding: 2rem 0;
  @media screen and (min-width:992px){
    width:50%
  }
`;
export const Form = styled.form`
  position: relative;
  display: flex;
`;

export const InputSearch = styled.input`
  display: block;
  width: 100%;
  padding: 0.7rem 0.75rem;
  font-size: 1rem;
  line-height: 1.25;
  color: rgb(70, 74, 76);
  background-color: rgb(255, 255, 255);
  background-image: none;
  background-clip: padding-box;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  &:focus {
    border-color: rgb(255, 112, 4);
  }
  &:focus-visible {
    outline: unset;
}
`;
export const BtnSubmit = styled.button`
  top: 0px;
  right: 0px;
  left: auto;
  width: 60px;
  height: 100%;
  display: flex;
  font-size: 20px;
  cursor: pointer;
  border: none;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  color: rgb(255, 255, 255);
  background: rgb(255, 112, 4);
`;