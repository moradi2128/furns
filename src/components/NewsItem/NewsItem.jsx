import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={`/blog/${item.title}`}>
          <CardImgContainer>
            <CardImg src={item.img} alt={item.title} />
          </CardImgContainer>
        </Link>
      </CardHeader>
      <CardBody>
        <CardTitle>
          <Link to={`/blog/${item.title}`}>{item.title}</Link>
        </CardTitle>
        <CardAuthor>
          By
          <Link to={`/blog/${item.title}`}>{item.author}</Link>
          <Link to={`/blog/${item.title}`}>{item.date}</Link>
        </CardAuthor>
        <p>{item.description}</p>
        <Btn to={`/blog/${item.title}`} type="news">
          Read More
        </Btn>
      </CardBody>
    </Card>
  );
};

export default NewsItem;
