import React from "react";
import { BtnContainer } from "./index";

import Theme from "../../Theme/Theme";
const BtnLink = ({ children, click, to }) => {
  return (
    <Theme>
      <BtnContainer onClick={click} to={to}>
        {children}
      </BtnContainer>
    </Theme>
  );
};

export default BtnLink;
