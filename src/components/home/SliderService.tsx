import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { useAxios } from "../../hooks/useAxios";
import ServiceSkeleton from "../skeleton/ServiceSkeleton";
import { Link } from "react-router-dom";

const SliderService = () => {
  const [response, loading, error] = useAxios("product");
  return (
    <div className="w-full h-[320px] flex items-center justify-between py-10">
      <FaAngleLeft
        color="#010D23"
        className="cursor-pointer text-8xl md:text-display1 lg:text-heading-l review-swiper-button-prev"
      />

      <Swiper
        modules={[Navigation]}
        rewind={true}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          880: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >
        {loading ? (
          <ServiceSkeleton />
        ) : (
          response?.map((product: any) => (
            <SwiperSlide key={product.id}>
              <div className="flex justify-center max-w-screen-xl gap-5">
                <div className="h-[234px] bg-neutral0 items-center justify-center flex rounded-2xl border-2 border-gradient group hover:bg-primary300 transition-all ease-out duration-300 cursor-pointer">
                  <Link to={`/service/${product.slug}`}>
                    <div className="w-[248px] md:w-[259px] flex flex-col items-center justify-center mx-3 md:mx-4 my-5">
                      <img
                        src={product.image}
                        className="w-[112px]"
                        alt="product-image"
                      />
                      <p className="pt-6 font-medium text-center text-type-l text-primary300 group-hover:text-neutral0">
                        {product.title}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <FaAngleRight
        color="#010D23"
        className="cursor-pointer text-8xl md:text-display1 lg:text-heading-l review-swiper-button-next"
      />
    </div>
  );
};

export default SliderService;
