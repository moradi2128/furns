import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItemData } from "../../data";

// === Icons ===
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

// === Style Components ===
import {
  NavUl,
  NavItemSection,
  NavLi,
  NavLink,
  SubItem,
  SubItemUl,
} from "./index";

const NavListSidebar = () => {
  const [isOpen, setIsOpen] = useState("");
  return (
    <NavItemSection>
      <NavUl>
        {navItemData.map((i) => {
          return (
            <NavLi key={i.id}>
              <NavLink
                onClick={() =>
                  i.id === isOpen ? setIsOpen("") : setIsOpen(i.id)
                }
              >
                <h5>{i.href ? <Link to={i.href}>{i.title}</Link> : i.title}</h5>
                {!i.href && <MdKeyboardArrowDown />}
              </NavLink>
              <SubItem id={i.id} isOpen={isOpen}>
                {i.subMenu &&
                  i.subMenu.map((item) => {
                    return (
                      <SubItemUl key={item.id}>
                        <Link to={item.href}>{item.title}</Link>
                      </SubItemUl>
                    );
                  })}
              </SubItem>
            </NavLi>
          );
        })}
      </NavUl>
    </NavItemSection>
  );
};

export default NavListSidebar;
