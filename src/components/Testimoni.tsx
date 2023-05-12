import React from "react";
import Men from "../assets/img/Men.png";
import Women from "../assets/img/Women.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Testimoni = () => {
  const testi = [
    {
      id: 1,
      image: Men,
      name: "Antonio Dilan",
      desc: "Lorem ipsum dolor sit amet consectetur. Cursus aliquam enim quisque porta turpis mauris. Cras ultricies justo consequat faucibus mattis faucibus. Morbi nisi eget vitae posuere semper nisi sollicitudin.",
    },
    {
      id: 2,
      image: Women,
      name: "Tania Aurelia",
      desc: "Lorem ipsum dolor sit amet consectetur. Cursus aliquam enim quisque porta turpis mauris. Cras ultricies justo consequat faucibus mattis faucibus. Morbi nisi eget vitae posuere semper nisi sollicitudin.",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto mt-[200px] relative ">
      <div className="flex flex-wrap">
        <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-semibold text-neutral800 px-2 xl:px-0">
          Testimoni
        </h2>
        <div className="w-full lg:w-4/5 mx-auto p-2">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testi.map(({ id, image, name, desc }) => (
              <SwiperSlide key={id}>
                <div className="max-w-[715px] flex flex-col sm:flex-row justify-center items-center p-2 sm:p-6 gap-4 border-gradient border-2 rounded-2xl mx-auto">
                  <div className="flex-none w-[128px] h-[128px]">
                    <img src={image} />
                  </div>
                  <div className="grow">
                    <h4 className="text-2xl sm:text-[32px] text-[#010D23] font-medium text-center sm:text-left">
                      {name}
                    </h4>
                    <p className="text-lg sm:text-[20px] text-[#3B4556] pt-2">
                      {desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
