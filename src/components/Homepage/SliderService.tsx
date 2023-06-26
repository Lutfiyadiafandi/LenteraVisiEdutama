import Self from "../../assets/svg/Layanan-Self.svg";
import Love from "../../assets/svg/Layanan-Love.svg";
import Team from "../../assets/svg/Layanan-Team.svg";
import Icon from "../../assets/svg/Layanan-Icon.svg";
import Pray from "../../assets/svg/Layanan-Pray.svg";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css/navigation";

const SliderService = () => {
  const servs = [
    {
      id: 1,
      logo: Self,
      title: "Self-Concept & Communication",
    },
    {
      id: 2,
      logo: Love,
      title: "Self-Healing & Communication",
    },
    {
      id: 3,
      logo: Team,
      title: "Team Work Building",
    },
    {
      id: 4,
      logo: Icon,
      title: "Business Communication Ettiquette & You-Attitude",
    },
    {
      id: 5,
      logo: Pray,
      title: "Readers Benefit in Every Message",
    },
  ];
  return (
    <div className="w-full h-[320px] flex items-center justify-between py-10">
      <FaAngleLeft
        color="#010D23"
        className="cursor-pointer text-8xl md:text-display1 lg:text-heading-l review-swiper-button-prev"
      />

      <Swiper
        modules={[Navigation]}
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
        loop={true}
      >
        {servs.map((serv) => (
          <SwiperSlide key={serv.id}>
            <div className="flex justify-evenly">
              <div className="h-[234px] bg-neutral0 items-center justify-center flex rounded-2xl border-2 border-gradient cursor-pointer">
                <div className="w-[250px] flex flex-col items-center justify-center mx-4 my-5">
                  <img src={serv.logo} className="w-[112px]" />
                  <p className="pt-6 font-medium text-center text-type-l text-primary300">
                    {serv.title}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <FaAngleRight
        color="#010D23"
        className="cursor-pointer text-8xl md:text-display1 lg:text-heading-l review-swiper-button-next"
      />
    </div>
  );
};

export default SliderService;
