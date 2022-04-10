import React from "react";
import { BtnContainer } from "./index";

import Theme from "../../Theme/Theme";
const Btn = ({ children, type, href, stockOut }) => {
  return (
    <Theme>
      <BtnContainer
        disabled={stockOut && "true"}
        type={type}
        href={stockOut ? null : href}
        as={stockOut ? "button" : href && "a"}
      >
        {children}
      </BtnContainer>
    </Theme>
  );
};

export default Btn;
