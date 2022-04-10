import React from "react";
import { BtnContainer } from "./index";

import Theme from "../../Theme/Theme";
const Btn = ({ children, href, btn, type, disabled }) => {
  return (
    <Theme>
      <BtnContainer
        as={type === "submit" && "button"}
        href={href}
        btn={btn}
        type={type}
        disabled={disabled && "true"}
      >
        {children}
      </BtnContainer>
    </Theme>
  );
};

export default Btn;
