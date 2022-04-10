import styled from "styled-components";

export const Map = styled.div`
  height: 500px;
  margin-bottom: 60px;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;
export const ContactItem = styled.div`
  & > div {
    height: 100%;
    padding: 50px 30px;
    background-color: rgb(245, 245, 245);
  }
  h2 {
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: 600;
  }
  h3 {
    min-width: 80px;
    font-family: Raleway;
    font-weight: 600;
  }
`;
export const ContactInfo = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;
export const Form = styled.form`
  button {
    width: 100%;
    display: block;
  }
`;
export const FormContainer = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
    line-height: 1;
    margin-bottom: 10px;
    color: rgb(33, 33, 33);
    font-size: 14px;
    font-weight: 600;
  }
  input,
  textarea {
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
  input:focus,
  textarea:focus {
    border: 1px solid rgb(255, 112, 4);
  }
`;