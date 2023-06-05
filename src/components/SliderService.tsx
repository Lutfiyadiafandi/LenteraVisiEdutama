import Self from "../assets/svg/Self.svg";
import Love from "../assets/svg/Love.svg";
import Team from "../assets/svg/Team.svg";
import Icon from "../assets/svg/Icon.svg";
import Pray from "../assets/svg/Pray.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SliderService = () => {
  const pro = [
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
        {pro.map(({ id, logo, title }) => (
          <SwiperSlide key={id}>
            <div className="flex justify-center">
              <div className="w-[295px] h-[235px] rounded-2xl bg-gradient-to-r from-gradient to-primary300 p-[2px]">
                <div className="w-full h-full bg-neutral0 items-center justify-center flex rounded-2xl">
                  <div className="mx-4 my-5 flex flex-col justify-center items-center">
                    <img src={logo} className="w-[112px]" />
                    <p className="text-type-l font-medium text-primary300 pt-6 text-center">
                      {title}
                    </p>
                  </div>
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
