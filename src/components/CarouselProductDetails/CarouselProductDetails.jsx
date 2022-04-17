import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
const CarouselProductDetails = ({ img }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwipeProduct2 productDetails"
      >
        {Array.isArray(img) ? (
          img.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <figure>
                  <img src={item} alt="" />
                </figure>
              </SwiperSlide>
            );
          })
        ) : (
          <SwiperSlide>
            <figure>
              <img src={img} alt="" />
            </figure>
          </SwiperSlide>
        )}
      </Swiper>
      {Array.isArray(img) && (
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwipeProduct productDetails"
        >
          {img.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export default CarouselProductDetails;
