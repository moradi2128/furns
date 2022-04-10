import styled from "styled-components";

export const Wrapper = styled.section``;
export const FormContainer = styled.div`
  margin: auto;
`;
export const Form = styled.form`
  padding: 50px 30px;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 12px 3px;
  div {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    line-height: 1;
    margin-bottom: 10px;
    color: rgb(33, 33, 33);
    font-size: 14px;
    font-weight: 600;
  }
  input {
    outline: none;
    width: 100%;
    display: block;
    line-height: 1;
    padding: 12px 15px;
    transition: all 0.4s ease 0s;
    border-radius: 3px;
    font-size: 14px;
    border: 1px solid rgb(235, 235, 235);
  }
  button,
  a {
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  a:first-child:hover {
    color: rgb(59, 72, 99);
    background-color: rgb(235, 235, 235);
  }
  a:last-child {
    color: rgb(59, 72, 99);
    background-color: rgb(235, 235, 235);
  }
  a:last-child:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(47, 51, 58);
  }
  input:focus {
    border: 1px solid rgb(255, 112, 4);
  }
  p {
    font-size: 13px;
    a {
      background: unset !important;
      display: inline-block;
      width: unset;
      color: rgb(71, 71, 71);
      font-weight: 600;
    }
    a:hover {
      color: rgb(255, 112, 4) !important;
    }
  }
  button:disabled {
    cursor: unset ;
    color: white ;
    background: rgb(255 159 86) ;
  }
  @media screen and (max-width: 575px) {
     {
      padding: 30px 20px;
    }
  }
`;
export const BtnContainer = styled.div`
  div {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`;
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  input {
    width: unset;
    accent-color: rgb(255, 112, 4);
  }
  label {
    cursor: pointer;
    margin-bottom: 0px;
    margin-left: 5px;
  }
`;
