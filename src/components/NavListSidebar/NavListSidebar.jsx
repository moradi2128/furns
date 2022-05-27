import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItemData } from "../../data";

// === Icons ===
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// === Style Components ===
import { NavItemSection, NavLi, NavLink, SubItem, SubItemUl } from "./index";

const NavListSidebar = ({ setIsOpen }) => {
  const [isOpenItem, setIsOpenItem] = useState("");
  return (
    <NavItemSection>
      <ul>
        {navItemData.map((i) => {
          return (
            <NavLi key={i.id}>
              <NavLink
                onClick={() =>
                  i.id === isOpenItem ? setIsOpenItem("") : setIsOpenItem(i.id)
                }
              >
                <h5>
                  {i.href ? (
                    <Link to={i.href} onClick={() => setIsOpen(false)}>
                      {i.title}
                    </Link>
                  ) : (
                    i.title
                  )}
                </h5>
                {!i.href && (
                  <>
                    {i.id === isOpenItem ? (
                      <AiOutlineMinus />
                    ) : (
                      <AiOutlinePlus />
                    )}
                  </>
                )}
              </NavLink>
              <SubItem id={i.id} isOpen={isOpenItem}>
                {i.subMenu &&
                  i.subMenu.map((item) => {
                    return (
                      <SubItemUl key={item.id}>
                        <Link to={item.href} onClick={() => setIsOpen(false)}>
                          {item.title}
                        </Link>
                      </SubItemUl>
                    );
                  })}
              </SubItem>
            </NavLi>
          );
        })}
      </ul>
    </NavItemSection>
  );
};

export default NavListSidebar;
