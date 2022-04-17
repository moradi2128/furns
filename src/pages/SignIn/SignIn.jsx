import React from "react";
// === Components ===
import TopSection from "../../components/TopSection/TopSection";
import Btn from "../../subComponents/Btn/Btn";

// === Styled Components ===
import { Wrapper, Form, FormContainer,BtnContainer } from "./index";
const SignIn = () => {
  return (
    <main>
      <TopSection title="sign in" name="signin" />
      <Wrapper className="container">
        <FormContainer className="col-lg-6">
          <Form>
            <div>
              <label htmlFor="email">Email *</label>
              <input id="email" type="email" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="password">Password *</label>
              <input id="password" type="password" placeholder="Password" />
            </div>
            <Btn type="submit">SIGNIN</Btn>
            <BtnContainer>
              <Btn to="/signup" type="news">
                CREATE A ACCOUNT
              </Btn>
              <Btn to="/">FORGET PASSWORD</Btn>
            </BtnContainer>
          </Form>
        </FormContainer>
      </Wrapper>
    </main>
  );
};

export default SignIn;
