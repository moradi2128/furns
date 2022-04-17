import React from "react";
import CarouselListProductItem from "../CarouselListProductItem/CarouselListProductItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";

// === Image ===
import bedroom from "../../assets/images/collection/bedroom.png";
import diving from "../../assets/images/collection/dining.png";
import living from "../../assets/images/collection/living.png";
import lounge from "../../assets/images/collection/lounge.png";

const CarouselListProduct = () => {
  return (
    <section>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          500: {
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
          <CarouselListProductItem
            title="Lounge"
            to="/collection/lounge"
            img={lounge}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselListProductItem
            title="Office Chair"
            to="/collection/office-chair"
            img={diving}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselListProductItem
            title="Bedroom"
            to="/collection/bedroom"
            img={bedroom}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselListProductItem
            title="Living"
            to="/collection/living"
            img={living}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselListProductItem
            title="Dining"
            to="/collection/diving"
            img={diving}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default CarouselListProduct;
