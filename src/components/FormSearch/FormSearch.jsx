import React from "react";
import { FormContainer, Form, InputSearch, BtnSubmit } from "./index";

// === Icons ===
import { AiOutlineSearch } from "react-icons/ai";

const FormSearch = () => {
  return (
    <FormContainer>
      <Form>
        <InputSearch type="text" placeholder="Enter your search keyword..." />
        <BtnSubmit type="submit">
          <AiOutlineSearch />
        </BtnSubmit>
      </Form>
    </FormContainer>
  );
};

export default FormSearch;
