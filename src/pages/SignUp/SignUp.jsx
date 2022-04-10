import React, { useState } from "react";
import { Link } from "react-router-dom";
// === Components ===
import TopSection from "../../components/TopSection/TopSection";
import Btn from "../../subComponents/Btn/Btn";

// === Styled Components ===
import {
  Wrapper,
  Form,
  FormContainer,
  BtnContainer,
  CheckboxContainer,
} from "./index";
const SignUp = () => {
  const [isCheckbox, setIsCheckbox] = useState(false);
  return (
    <main>
      <TopSection title="CREATE ACCOUNT" pathname="signup" />
      <Wrapper className="container">
        <FormContainer className="col-lg-6">
          <Form>
            <BtnContainer>
              <div>
                <label htmlFor="email">First Name *</label>
                <input id="email" type="email" />
              </div>
              <div>
                <label htmlFor="email">Last Name *</label>
                <input id="email" type="email" />
              </div>
            </BtnContainer>
            <div>
              <label htmlFor="email">Email *</label>
              <input id="email" type="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone *</label>
              <input id="phone" type="text" placeholder="+98987654321" />
            </div>
            <div>
              <label htmlFor="password">Password *</label>
              <input id="password" type="password" />
            </div>
            <div>
              <label htmlFor="confirm-password">ConFirm Password *</label>
              <input id="confirm-password" type="password" />
            </div>
            <CheckboxContainer>
              <input
                type="checkbox"
                id="checkbox"
                value={isCheckbox}
                onClick={() => setIsCheckbox(!isCheckbox)}
              />
              <label htmlFor="checkbox">
                I've read and accept the Privacy Policy
              </label>
            </CheckboxContainer>
            <p>
              By signing up, you agree to our{" "}
              <Link to="/">Terms of Service.</Link> Learn how we collect and use
              your data in our <Link to="/">Privacy Policy.</Link>
            </p>
            <Btn type="submit" disabled={!isCheckbox && "true"}>SIGNIN</Btn>
            <Btn href="/signهد" type="news" >
              ALREADY HAVE A ACCOUNT?
            </Btn>
          </Form>
        </FormContainer>
      </Wrapper>
    </main>
  );
};

export default SignUp;
