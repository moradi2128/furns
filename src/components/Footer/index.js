// === Styled Components ===
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin-top: 60px;
  padding-top: 60px;
  background-color: rgb(47, 51, 58);
  color: rgb(255, 255, 255);
`;
export const FooterList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const FooterItem = styled.div`
  margin-bottom: 2rem;
  h4 {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    margin-bottom: 15px;
    letter-spacing: 1.2px;
    color: rgb(255, 255, 255);
  }
  p {
    color: rgb(255, 255, 255);
    font-size: 14px;
    max-width: 454px;
    line-height: 24px;
  }

  @media screen and (min-width: 767px) {
    padding: 0 15px;
    p {
      max-width: 290px;
    }
  }
`;
export const SocialMedia = styled.ul`
  margin-top: 12px;
  display: flex;
  gap: 0.5rem;
`;
export const SocialMediaItem = styled.li`
  a {
    color: rgb(231, 231, 231);
    line-height: 38px;
    width: 32px;
    height: 32px;
    text-align: center;
    background-color: transparent;
    display: block;
    border-radius: 50%;
  }
  a:hover {
    background-color: rgb(255, 112, 4);
  }
`;
export const Ul = styled.ul`
  flex-direction: column;
  margin-top: 15px;
  display: flex;
  gap: 0.5rem;
`;
export const Li = styled.li`
margin-bottom: 8px;

  a {
    display: block;
    font-size: 13px;
    line-height: 18px;
    padding: 0px;
    color: rgb(255, 255, 255);
    transition: all 0.4s ease 0s;
}
  }
  a:hover {
    transform: translateX(6px);
    color: rgb(255, 112, 4);
  }
`;
export const FormEmail = styled.form``;
export const InputEmail = styled.input`
  outline: none;
  display: inline-block;
  vertical-align: top;
  line-height: 50px;
  height: 50px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  width: 100%;
  text-transform: capitalize;
  background: transparent;
  border: 1px solid rgb(67, 71, 78);
  border-radius: 0px;
  text-align: left;
  box-shadow: none;
  padding-left: 20px;
  padding-right: 10px;
  margin-bottom: 0.5rem;
  transition: all 0.4s ease 0s;
  :focus {
    border-color: rgb(255, 112, 4);
  }
`;
export const SubFooter = styled.div`
  
  background-color: rgb(33, 33, 33);
  padding-top: 15px;
  padding-bottom: 10px;
  margin-bottom: 50px;
  p {
    color: white;
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: small;
  }
  @media screen and (min-width: 992px) {
    margin-bottom: 0;
  }
`;
