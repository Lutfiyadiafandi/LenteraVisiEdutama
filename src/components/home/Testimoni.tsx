import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useAxios } from "../../hooks/useAxios";
import HeadingTitle from "../atoms/HeadingTitle";
import TestimoniSkeleton from "../skeleton/TestimoniSkeleton";

const Testimoni = () => {
  const [response, loading, error] = useAxios("testimoni");
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-5 xxl:px-0 mt-[100px] md:mt-[120px]">
      <div className="flex flex-wrap">
        <HeadingTitle title={"Testimoni"} />
        <div className="w-full py-10 mx-auto lg:w-4/5">
          <Swiper
            modules={[Navigation]}
            slidesPerView={"auto"}
            rewind={true}
            centeredSlides={true}
            spaceBetween={0}
            navigation={{
              nextEl: ".review-swiper-button-next",
              prevEl: ".review-swiper-button-prev",
            }}
            className="mySwiper"
          >
            {loading ? (
              <TestimoniSkeleton />
            ) : (
              response?.map((data: any) => (
                <SwiperSlide key={data.id}>
                  <div className="lg:ml-[50px] xxl:ml-[87px] max-w-[715px] max-h-max mx-auto rounded-2xl flex flex-col sm:flex-row justify-center items-center p-4 md:p-6 gap-4 border-[1px] border-gradient">
                    <div className="flex-none w-[128px] h-[128px]">
                      <img
                        src={data.image}
                        alt="testimoni-image"
                        className="rounded-full"
                      />
                    </div>
                    <div className="grow">
                      <h4 className="font-medium text-center text-heading-s md:text-heading-m text-neutral900 md:text-left">
                        {data.name}
                      </h4>
                      <p className="pt-2 font-normal text-type-m md:text-type-l text-neutral500">
                        {data.message}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
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
