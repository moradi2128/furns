import React from "react";
import { Link } from "react-router-dom";
import { Section, Li } from "./index";
const TopSection = ({ title, name }) => {
  return (
    <Section>
      <div className="container">
        <h2>{title}</h2>
        <ul>
          <Li>
            <Link to="/">HOME</Link>
          </Li>
          <Li>
            <span>{name}</span>
          </Li>
        </ul>
      </div>
    </Section>
  );
};

export default TopSection;
