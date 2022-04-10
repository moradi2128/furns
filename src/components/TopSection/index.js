import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgb(244, 245, 248);
  color: rgb(41, 43, 44);
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 60px;
  h2 {
    margin: 0px;
    font-size: 32px;
    overflow: hidden;
    line-height: 1.58;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-transform: uppercase;
    font-weight: 600;
  }

  @media screen and (max-width: 991px) {
    h2 {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 767px) {
    h2 {
      font-size: 20px;
    }
  }
`;
export const Li = styled.li`
  line-height: 1;
  overflow: hidden;
  max-width: 200px;
  letter-spacing: 2px;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-size: 14px;
  padding-left: 5px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
  &:last-child:before {
    float: left;
    content: "/";
    padding-right: 5px;
    color: rgb(71, 71, 71);
  }
`;