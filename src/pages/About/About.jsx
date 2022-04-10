import React from "react";
import { HeaderAbout, BodyAbout, AboutItem, Description } from "./index";
import { aboutPageData } from "../../data";
// === Components ===
import TopSection from "../../components/TopSection/TopSection";

const About = () => {
  return (
    <main>
      <TopSection title="about us" pathname="about" />
      <section>
        <HeaderAbout className="container">
          <h2>{aboutPageData[0].title}</h2>
        </HeaderAbout>
        <BodyAbout>
          <div>
            <AboutItem>
              <img src={aboutPageData[0].description[0].img} />
            </AboutItem>
            <AboutItem>
              <img src={aboutPageData[0].description[1].img} />
            </AboutItem>
          </div>
          <Description className="container">
            <div>
              <h4>{aboutPageData[0].description[0].title}</h4>
              <p>{aboutPageData[0].description[0].description}</p>
            </div>
            <div>
              <h4>{aboutPageData[0].description[1].title}</h4>
              <p>{aboutPageData[0].description[1].description}</p>
            </div>
          </Description>
        </BodyAbout>
      </section>
    </main>
  );
};

export default About;
