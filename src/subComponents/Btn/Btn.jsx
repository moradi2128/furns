import React from "react";
import { BtnContainer } from "./index";

import Theme from "../../Theme/Theme";
const Btn = ({ children, click, to, btn, type, disabled }) => {
  return (
    <Theme>
      <BtnContainer
        onClick={click}
        as={(type === "submit") | (type === "button") && "button"}
        type={type}
        to={to}
        btn={btn}
        disabled={disabled && "true"}
      >
        {children}
      </BtnContainer>
    </Theme>
  );
};

export default Btn;
