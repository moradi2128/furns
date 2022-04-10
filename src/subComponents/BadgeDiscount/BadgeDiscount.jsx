import React from "react";
import { BadgeDiscountBtn } from "./index";
const BadgeDiscount = ({ children, stockOut }) => {
  return <BadgeDiscountBtn stockOut={stockOut}>{children}</BadgeDiscountBtn>;
};

export default BadgeDiscount;
