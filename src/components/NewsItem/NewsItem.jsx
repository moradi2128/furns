import React from "react";
// === Styled Components ===
import {
  Card,
  CardHeader,
  CardBody,
  CardImgContainer,
  CardImg,
  CardTitle,
  CardAuthor,
} from "./index";
// === Components ===
import Btn from "../../subComponents/Btn/Btn";

const NewsItem = ({ item }) => {
  return (
    <Card>
      <CardHeader>
        <a href={item.href}>
          <CardImgContainer>
            <CardImg src={item.img} />
          </CardImgContainer>
        </a>
      </CardHeader>
      <CardBody>
        <CardTitle>
          <a href={item.href}>{item.title}</a>
        </CardTitle>
        <CardAuthor>
          By
          <a href={item.hrefAuthor}>{item.author}</a>
          <a href={item.href}>{item.date}</a>
        </CardAuthor>
        <p>{item.description}</p>
        <Btn href={item.href} type="news">
          Read More
        </Btn>
      </CardBody>
    </Card>
  );
};

export default NewsItem;
