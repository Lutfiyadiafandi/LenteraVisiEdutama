import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const Gallery = () => {
  return (
    <section className="max-w-screen-xl mx-auto md:px-5 px-4 xxl:px-0 mt-[40px]">
      <div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          slidesPerView={"auto"}
          centeredSlides={true}
          rewind={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              className="w-[650px] max-h-[375px] mx-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              className="w-[650px] max-h-[375px] mx-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              className="w-[650px] max-h-[375px] mx-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              className="w-[650px] max-h-[375px] mx-auto object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
