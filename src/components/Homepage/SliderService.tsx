import Self from "../../assets/svg/Layanan-Self.svg";
import Love from "../../assets/svg/Layanan-Love.svg";
import Team from "../../assets/svg/Layanan-Team.svg";
import Icon from "../../assets/svg/Layanan-Icon.svg";
import Pray from "../../assets/svg/Layanan-Pray.svg";

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
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          880: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1180: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {servs.map((serv) => (
          <SwiperSlide key={serv.id}>
            <div className="flex justify-center">
              <div className="w-[295px] h-[234px] bg-neutral0 items-center justify-center flex rounded-2xl border-2 border-gradient cursor-pointer group hover:bg-primary300">
                <div className="mx-4 my-5 flex flex-col justify-center items-center">
                  <img src={serv.logo} className="w-[112px]" />
                  <p className="text-type-l font-medium text-primary300 pt-6 text-center group-hover:text-neutral0">
                    {serv.title}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderService;
