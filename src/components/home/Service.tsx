import HeadingTitle from "../atoms/HeadingTitle";
import SliderService from "./SliderService";

const Service = () => {
  return (
    <section className="max-w-screen-xxl mx-auto px-4 md:px-5 xxl:px-0 mt-[100px] md:mt-[120px]">
      <div className="max-w-screen-xl mx-auto">
        <HeadingTitle title={"Layanan Kami"} />
      </div>
      <SliderService />
    </section>
  );
};

export default Service;
