// === Styled Components ===
import styled from "styled-components";
import { Link } from "react-router-dom";
export const Card = styled.div`
  padding: 0 0.5rem;
  transition: all 0.2s ease;
  .thumb{
    transition: all 0.2s ease;
  }
  &:hover .thumb-hover,
  &:hover .thumb {
    transition: all 0.2s ease;
    transform: rotate(3deg) scale(1.1);
    opacity: 1;
  }
  &:hover .toCartActionItem:nth-child(2),&:hover .toCartActionItem:nth-child(3),&:hover .show-btn{
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
    
}}
`;
export const CardContainer = styled.div`
  overflow: hidden;
  margin-top: 30px;
`;
export const Figure = styled.figure`
  position: relative;
  overflow: hidden;
`;

export const CardImgContainer = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  width: 100%;
`;
export const CardImgLink = styled(Link)`
  overflow: hidden;
`;
export const ImgThumb = styled.div`
  z-index: 1;
  max-width: 100%;
  width: 210px;
  height: 247px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: contain;
`;
export const ImgThumbHover = styled.div`
  position: absolute;
  z-index: 2;
  top: 0px;
  left: 0px;
  opacity: 0;
`;
// === Card Body ===
export const CardBody = styled.div`
  margin: 0.8rem 0;
  text-align: center;
`;
export const CardBodyTitle = styled(Link)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`;
export const Price = styled.h4`
  margin: 0.5rem 0;
`;
export const DiscountPrice = styled.span`
  margin-right: 0.5rem;
  color: gray;
  text-decoration: line-through;
`;
export const ActionIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  svg {
    cursor: pointer;
    font-size: larger;
  }
  svg:hover {
    color: rgb(255, 112, 4);
  }
  &.toCartAction {
    position: absolute;
    right: 18px;
    z-index: 100;
    flex-direction: column;
    top: 18px;
  }
`;
export const IconContainer = styled.div`
  position: relative;
  svg:last-child {
    position: absolute;
    left: 0;
    top: 0;
    visibility: hidden;
    color: rgb(255, 112, 4);
  }
  .vis-hide {
    visibility: hidden;
  }
  .vis-show {
    visibility: visible !important;
  }
  &.toCartActionItem {
    background: white;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 50%;
  }
  &.toCartActionItem:hover div{
    visibility: visible;
  }
  &.toCartActionItem:hover  {
    background: rgb(255, 112, 4);
    color: white !important; 
  }
  &.toCartActionItem:hover svg {
    color: white !important; 
  }

  &.toCartActionItem:hover 
  &.toCartActionItem svg:hover{
    color: white !important;
  }
  &.toCartActionItem:nth-child(2) svg {
    visibility: visible;
    position: unset;
    color: initial;
}
&.toCartActionItem svg:last-child{
    top:unset;
    left:unset;
}
&.toCartActionItem:nth-child(2),&.toCartActionItem:nth-child(3){
    transition:all 0.3s ease;
    visibility: hidden;
    opacity: 0;
    transform: translateY(20px);
}
  }
`;
export const BtnContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 10%;
  left: 10%;
  bottom: 18px;
  z-index: 100;
  transition: all 0.3s ease;

  transform: translateY(20px);
  visibility: hidden;
  opacity: 0;
`;
export const IconTooltip = styled.div`
  visibility: hidden;
  position: absolute;
  display: block;
  white-space: nowrap;
  right: 46px;
  background: black;
  color: white;
  padding: 4px 9px;
  border-radius: 3px;
  font-size: small;
  font-weight: 400;
  :before {
    content: "";
    width: 10px;
    height: 10px;
    background: black;
    position: absolute;
    right: -3px;
    top: 9px;
    transform: rotate(45deg);
    z-index: -1;
  }
`;
