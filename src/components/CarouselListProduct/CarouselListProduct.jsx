import React from "react";
import CarouselListProductItem from "../CarouselListProductItem/CarouselListProductItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";

// === Icons ===
import { GrLounge } from "react-icons/gr";
import {
  MdOutlineChairAlt,
  MdOutlineBedroomChild,
  MdOutlineLiving,
  MdOutlineDining,
} from "react-icons/md";

const CarouselListProduct = () => {
  return (
    <section>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          500:{
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        loop={true}
        className="mySwiper productList container"
      >
        <SwiperSlide>
          <CarouselListProductItem title="Lounge" href="/">
            <GrLounge />
          </CarouselListProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselListProductItem title="Office Chair" href="/">
            <MdOutlineChairAlt />
          </CarouselListProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselListProductItem title="Bedroom" href="/">
            <MdOutlineBedroomChild />
          </CarouselListProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselListProductItem title="Living" href="/">
            <MdOutlineLiving />
          </CarouselListProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselListProductItem title="Dining" href="/">
            <MdOutlineDining />
          </CarouselListProductItem>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default CarouselListProduct;
