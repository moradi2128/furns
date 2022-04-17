import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  Wrapper,
  Left,
  Right,
  SortContainer,
  SortLeft,
  SortRight,
  Input,
  ListContainer,
  Li,
} from "./index";

const Sort = ({productItem}) => {
  const [value, setValue] = useState("Relevance");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Left>
        <p>Showing {productItem} products</p>
      </Left>
      <Right>
        <span>Sort by</span>
        <SortContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <SortLeft>
            <Input type="text" placeholder={value} />
          </SortLeft>
          <SortRight isOpen={isOpen}>
            <MdOutlineKeyboardArrowDown />
          </SortRight>
          {isOpen && (
            <ListContainer>
              <Li onClick={() => setValue("Relevance")}>Relevance</Li>
              <Li onClick={() => setValue("Name(A-Z)")}>Name(A-Z)</Li>
              <Li onClick={() => setValue("name(Z-A)")}>name(Z-A)</Li>
              <Li onClick={() => setValue("Price(Low-Hight)")}>
                Price(Low-Hight)
              </Li>
              <Li onClick={() => setValue("Price(Hight-Low)")}>
                Price(Hight-Low)
              </Li>
            </ListContainer>
          )}
        </SortContainer>
      </Right>
    </Wrapper>
  );
};

export default Sort;
