import React from "react";
import { BtnContainer } from "./index";

import Theme from "../../Theme/Theme";
import { Link } from "react-router-dom";
const Btn = ({ children, type, href, stockOut,click }) => {
  return (
    <Theme>
      <BtnContainer
        onClick={click}
        disabled={stockOut && "true"}
        type={type}
        to={stockOut ? null : href}
        as={stockOut ? "button" : href && Link}
      >
        {children}
      </BtnContainer>
    </Theme>
  );
};

export default Btn;
