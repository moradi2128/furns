// Description : NavItem should type "li" and TabItem type "div"
import React, { useState } from "react";
import { NavTabs, NavItem, TabContent } from "./index.js";

const TabList = ({ children }) => {
  const [isSelect, setIsSelect] = useState(0);

  return (
    <div>
      <NavTabs>
        {children.map((i, index) => {
          return (
            i !== undefined &&
            i.type === "li" && (
              <NavItem
                key={index}
                onClick={() => setIsSelect(Number(i.props.id))}
                isSelect={isSelect}
                id={i.props.id}
              >
                {i.props.children}
              </NavItem>
            )
          );
        })}
      </NavTabs>
      <TabContent>
        {children.map((i, index) => {
          return (
            i !== undefined &&
            i.type !== "li" && (
              <div key={index}>
                {i.props.id == isSelect && i.props.children}
              </div>
            )
          );
        })}
      </TabContent>
    </div>
  );
};

export default TabList;
