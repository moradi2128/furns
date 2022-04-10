import React from "react";
import { BannerContainer,BannerSection } from "./index";
// === Components ===
import BannerItem from "../BannerItem/BannerItem";

// === Data ===
import { bannerData } from "../../data";

const Banner = () => {
  return (
    <BannerSection>
      <BannerContainer className="container">
        {bannerData.map((item) => {
          return <BannerItem key={item.id} item={item} />;
        })}
      </BannerContainer>
    </BannerSection>
  );
};

export default Banner;
