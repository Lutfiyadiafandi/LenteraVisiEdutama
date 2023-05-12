import Bg from "../assets/svg/Bgprogram.svg";
import SliderProgram from "./SliderProgram";

const Program = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-[200px] relative ">
      <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-semibold text-neutral800 px-2 xl:px-0">
        Kenali diri & bangun kepercayaan diri-mu
      </h2>
      <SliderProgram />
      <img src={Bg} className="absolute -top-40 left-32 -z-10" />
    </div>
  );
};

export default Program;
