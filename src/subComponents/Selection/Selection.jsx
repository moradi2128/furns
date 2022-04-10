import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  Wrapper,
  Label,
  SortContainer,
  SortLeft,
  SortRight,
  Input,
  ListContainer,
  Li,
} from "./index";

const Selection = ({ valueSelection, setValueSelection, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Label>{label}</Label>
      <SortContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <SortLeft>
          <Input type="text" placeholder={valueSelection} />
        </SortLeft>
        <SortRight isOpen={isOpen}>
          <MdOutlineKeyboardArrowDown />
        </SortRight>
        {isOpen && (
          <ListContainer>
            {children.map((i, index) => {
              return (
                <Li
                  key={index}
                  onClick={(e) => setValueSelection(e.target.innerText)}
                >
                  {i.props.children}
                </Li>
              );
            })}
          </ListContainer>
        )}
      </SortContainer>
    </Wrapper>
  );
};

export default Selection;
