import React from "react";

import slider1 from "../../assets/images/slider/slider-1.png";
import slider2 from "../../assets/images/slider/slider-2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import styled from "styled-components";
import Btn from "../../subComponents/Btn/Btn";

const Slider = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  padding: 50px 0px;
  background-color: rgb(231, 231, 231);
  height: 100%;
  display: flex;
  @media screen and (min-width: 576px) {
    height: 533px;
  }
  @media screen and (min-width: 767px) {
    height: calc(100vh - 105px);
  }
  @media screen and (max-width: 991px) {
  }
`;
const SliderContainer = styled.div`
  @media screen and (min-width: 576px) {
    justify-content: space-around;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1rem;
  }
`;
const Description = styled.div`
  text-align: start;

  & h4 {
    font-size: 24px;
    line-height: 1;
    color: rgb(71, 71, 71);
    font-weight: 600;
  }
  & h2 {
    font-size: 72px;
    margin-bottom: 10px;
    font-weight: 700;
    @media screen and (max-width: 991px) {
      font-size: 50px;
    }
    @media screen and (max-width: 767px) {
      font-size: 32px;
    }
  }
  & p {
    color: rgb(71, 71, 71);
    max-width: 470px;
  }
`;
const CarouselHome = () => {
  return (
    <section>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper carouselMain"
      >
        <SwiperSlide>
          <Slider>
            <SliderContainer className="container">
              <img src={slider1} alt="slider1" />
              <Description>
                <h4>New Products</h4>
                <h2>Flexible Chair</h2>
                <p>
                  Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
                  eiusmo tempor incididunt ut labore et dolore magna
                </p>
                <Btn href="/shop">Shop Now</Btn>
              </Description>
            </SliderContainer>
          </Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider>
            <SliderContainer className="container">
              <img src={slider2} alt="slider2" />
              <Description>
                <h4>Best Seller</h4>
                <h2>Creative Sofa</h2>
                <p>
                  Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
                  eiusmo tempor incididunt ut labore et dolore magna
                </p>
                <Btn href="/shop">Shop Now</Btn>
              </Description>
            </SliderContainer>
          </Slider>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default CarouselHome;
