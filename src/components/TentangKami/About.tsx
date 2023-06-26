import React from "react";
import AboutUs from "../../assets/img/Img-AboutUs.png";
import AboutUs2 from "../../assets/img/Img-AboutUs2.png";

const About = () => {
  return (
    <section className="max-w-screen-xl mx-auto md:px-5 px-4 xxl:px-0 mt-[50px]">
      <div className="flex flex-col items-start w-full">
        <div className="w-full xl:w-5/6 flex flex-col md:flex-row gap-10 lg:gap-[70px]">
          <img src={AboutUs} className="w-[400px]" />
          <div className="flex flex-col justify-center gap-5 lg:gap-10">
            <h2 className="font-semibold text-heading-l lg:text-display2 text-neutral800">
              Tentang Kami
            </h2>
            <p className="font-normal text-type-m md:text-type-l text-neutral500">
              Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
              molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem
              eros vitae. Netus ipsum sem tincidunt cursus.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end w-full">
        <div className="w-full xl:w-5/6 flex flex-col md:flex-row-reverse gap-10 lg:gap-[70px] mt-[120px]">
          <img src={AboutUs2} className="w-[400px]" />
          <div className="flex flex-col justify-center gap-5 lg:gap-10">
            <h2 className="font-semibold text-heading-l lg:text-display2 text-neutral800">
              Visi & Misi
            </h2>
            <div className="flex flex-col gap-3 lg:gap-5">
              <p className="font-normal text-type-m md:text-type-l text-neutral500">
                Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
                molestie. Et massa tellus at non lacus nec. Aliquam porttitor
                sem eros vitae. Netus ipsum sem tincidunt cursus.
              </p>
              <p className="font-normal text-type-m md:text-type-l text-neutral500">
                Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
                molestie. Et massa tellus at non lacus nec. Aliquam porttitor
                sem eros vitae. Netus ipsum sem tincidunt cursus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
