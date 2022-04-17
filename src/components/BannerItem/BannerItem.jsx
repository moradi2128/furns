import React from "react";

import {
  BannerItemContainer,
  BannerImgWrapper,
  BannerImg,
  BannerDescription,
  BannerDescriptionWrapper,
} from "./index";
const BannerItem = ({ item }) => {
  return (
    <BannerItemContainer className="col-md-6">
      <BannerImgWrapper to="/shop">
        <figure>
          <BannerImg src={item.img} alt={item.title} />
        </figure>
        <BannerDescription left={item.left}>
          <BannerDescriptionWrapper>
            <h3>
              {item.title}
              <span>{item.subTitle}</span>
            </h3>
            <p>{item.description}</p>
          </BannerDescriptionWrapper>
        </BannerDescription>
      </BannerImgWrapper>
    </BannerItemContainer>
  );
};

export default BannerItem;
