import styled from "styled-components";
export const Wrapper = styled.div`
  color: rgb(33, 33, 33);
  h3 {
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: 600;
  }
`;
export const Form = styled.form`
  label {
    display: inline-flex;
    align-items: center;
    line-height: 1;
    margin-bottom: 10px;
    color: rgb(33, 33, 33);
    font-size: 14px;
    font-weight: 600;
  }
  input,textarea {
    outline: 0;
    width: 100%;
    display: block;
    line-height: 1;
    padding: 12px 15px;
    transition: all 0.4s ease 0s;
    border-radius: 3px;
    font-family: "Open Sans";
    font-size: 14px;
    border: 1px solid rgb(235, 235, 235);
  }
  input:focus,textarea:focus {
    border: 1px solid rgb(255, 112, 4);
  }
`;