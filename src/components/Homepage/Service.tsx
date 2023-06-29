import SliderService from "./SliderService";

const Service = () => {
  return (
    <section
      // data-aos="fade-down"
      // data-aos-duration="2000"
      className="max-w-screen-xxl mx-auto px-4 md:px-5 xxl:px-0 mt-[100px] md:mt-[120px]"
    >
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-semibold text-heading-m md:text-heading-xl text-neutral800">
          Layanan Kami
        </h2>
      </div>
      <SliderService />
    </section>
  );
};

export default Service;
