import React from "react";
import { Slider, SliderContainer, Description } from "./index";
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
// === Components ===
import BtnLink from "../../subComponents/BtnLink/BtnLink";

const CarouselHome = () => {
  return (
    <section>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
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
                <BtnLink to="/shop">Shop Now</BtnLink>
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
                <BtnLink to="/shop">Shop Now</BtnLink>
              </Description>
            </SliderContainer>
          </Slider>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default CarouselHome;
