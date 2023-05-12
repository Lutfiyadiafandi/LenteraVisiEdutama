import Self from "../assets/svg/Self.svg";
import Love from "../assets/svg/Love.svg";
import Team from "../assets/svg/Team.svg";
import Icon from "../assets/svg/Icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SliderProgram = () => {
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
  ];
  return (
    <div className="w-full h-[320px] flex items-center justify-between mt-7 bg-white">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {pro.map(({ id, logo, title }) => (
          <SwiperSlide key={id}>
            <div className="flex justify-center">
              <div className="w-[295px] h-[235px] border-gradient border-2 rounded-2xl">
                <div className="mx-4 my-5 flex flex-col justify-center items-center">
                  <img src={logo} className="w-[112px]" />
                  <p className="text-xl pt-6 text-center">{title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderProgram;
