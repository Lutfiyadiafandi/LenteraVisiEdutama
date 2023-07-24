import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useAxios } from "../../hooks/useAxios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Gallery = () => {
  const [response, loading, error] = useAxios("gallery");
  return (
    <section className="max-w-screen-xl mx-auto md:px-5 px-4 xxl:px-0 mt-[40px]">
      <div>
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          pagination={true}
          navigation={true}
          slidesPerView={"auto"}
          centeredSlides={true}
          rewind={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {error && <p>{error.message}</p>}
          {loading ? (
            <Skeleton className="w-full h-[375px]" />
          ) : (
            response?.map((data: any) => (
              <SwiperSlide>
                <img
                  src={data.image}
                  className="w-full h-[375px] object-cover"
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
