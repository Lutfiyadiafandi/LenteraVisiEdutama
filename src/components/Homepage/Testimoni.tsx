import React from "react";
import Men from "../../assets/img/Img-Testimoni.png";
import Women from "../../assets/img/Img-Testimoni2.png";
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
    <section className="max-w-screen-xl mx-auto px-4 xxl:px-0 mt-[100px] md:mt-[120px]">
      <div className="flex flex-wrap">
        <h2 className="text-heading-m md:text-heading-xl font-semibold text-neutral800">
          Testimoni
        </h2>
        <div className="w-full lg:w-4/5 mx-auto py-10">
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
                <div className="xxl:ml-[87px] max-w-[715px] rounded-2xl bg-gradient-to-r from-gradient to-primary300 p-[1px]">
                  <div className="bg-neutral0 flex flex-col sm:flex-row justify-center items-center p-4 md:p-6 gap-4 rounded-2xl mx-auto">
                    <div className="flex-none w-[128px] h-[128px]">
                      <img src={image} />
                    </div>
                    <div className="grow">
                      <h4 className="text-heading-s md:text-heading-m text-neutral900 font-medium text-center md:text-left">
                        {name}
                      </h4>
                      <p className="text-type-m md:text-type-l font-normal text-neutral500 pt-2">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
