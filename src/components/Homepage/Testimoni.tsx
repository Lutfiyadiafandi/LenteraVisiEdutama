import React from "react";
import Men from "../../assets/img/Img-Testimoni.png";
import Women from "../../assets/img/Img-Testimoni2.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

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
    <section className="max-w-screen-xl mx-auto px-4 md:px-5 xxl:px-0 mt-[100px] md:mt-[120px]">
      <div className="flex flex-wrap">
        <h2 className="font-semibold text-heading-m md:text-heading-xl text-neutral800">
          Testimoni
        </h2>
        <div className="w-full py-10 mx-auto lg:w-4/5">
          <Swiper
            modules={[Navigation]}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".review-swiper-button-next",
              prevEl: ".review-swiper-button-prev",
            }}
            className="mySwiper"
          >
            {testi.map((testi) => (
              <SwiperSlide key={testi.id}>
                <div className="lg:ml-[50px] xxl:ml-[87px] max-w-[715px] mx-auto rounded-2xl flex flex-col sm:flex-row justify-center items-center p-4 md:p-6 gap-4 border-[1px] border-gradient">
                  <div className="flex-none w-[128px] h-[128px]">
                    <img src={testi.image} />
                  </div>
                  <div className="grow">
                    <h4 className="font-medium text-center text-heading-s md:text-heading-m text-neutral900 md:text-left">
                      {testi.name}
                    </h4>
                    <p className="pt-2 font-normal text-type-m md:text-type-l text-neutral500">
                      {testi.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-between md:justify-normal md:gap-[100px] lg:ml-[50px] xxl:ml-[87px] mt-5">
            <FaAngleLeft
              color="#1E739A"
              className="cursor-pointer text-heading-l review-swiper-button-prev"
            />
            <FaAngleRight
              color="#1E739A"
              className="cursor-pointer text-heading-l review-swiper-button-next"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
