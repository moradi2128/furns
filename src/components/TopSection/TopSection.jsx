import React from "react";
import { Link } from "react-router-dom";
import { Section, Li } from "./index";
const TopSection = ({ title, pathname }) => {
  return (
    <Section>
      <div className="container">
        <h2>{title}</h2>
        <ul>
          <Li>
            <Link to="/">HOME</Link>
          </Li>
          <Li>
            <span>{pathname}</span>
          </Li>
        </ul>
      </div>
    </Section>
  );
};

export default TopSection;
