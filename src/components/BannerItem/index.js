import styled from "styled-components";

export const BannerItemContainer = styled.div`
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    :first-child {
      padding-right: 1rem;
    }
    :last-child {
      padding-left: 1rem;
    }
  }
`;
export const BannerImgWrapper = styled.a`
  display: block;
  overflow: hidden;
  position: relative;
  :hover {
    color: initial;
  }
`;
export const BannerImg = styled.img`
box-sizing: border-box;
padding: 0px;
border: none;
margin: auto;
display: block;
width: 100%;
height:100%;
min-width: 100%;
max-width: 100%;
min-height: 100%;
max-height: 100%;
}
`;
export const BannerDescription = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 40px;
    justify-content:${(props) => (props.left ? "flex-start" : "flex-end")} ;

    
}`;
export const BannerDescriptionWrapper = styled.div`
  align-self: center;
  h3 {
    font-size: x-large;
    line-height: 1.1;
  }
  p {
    margin-top: 0.5rem;
  }
  span {
    display: block;
  }
`;
