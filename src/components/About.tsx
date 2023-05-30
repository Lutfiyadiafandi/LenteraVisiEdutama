import React from "react";
import AboutUs1 from "../assets/img/AboutUs1.png";
import AboutUs2 from "../assets/img/AboutUs2.png";
import BgAboutUs from "../assets/svg/BgAboutUs.svg";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto relative">
      <div>
        <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-semibold text-neutral800 px-2 xl:px-0 mb-2 lg:mb-0">
          Tentang Kami
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="w-full sm:w-1/2 flex flex-col justify-center gap-2 sm:gap-8 px-2 order-1 sm:-order-1">
          <h4 className="text-[24px] lg:text-[40px] lg:leading-[48.41px] font-medium text-neutral800">
            Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
            molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem
            eros vitae. Netus ipsum sem tincidunt cursus.
          </h4>
          <p className="text-[16px] lg:text-[20px] text-neutral500">
            Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
            molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem
            eros vitae. Netus ipsum sem tincidunt cursus.
          </p>
        </div>
        <div className="bg-white">
          <img src={AboutUs1} className="max-w-[250px] lg:max-w-[505px]" />
          <img src={BgAboutUs} className="absolute -top-32 left-96 -z-10" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-28 gap-3 bg-white lg:pb-10">
        <div className="w-full sm:w-1/2 flex flex-col justify-center gap-2 sm:gap-8 px-2 order-last">
          <h4 className="text-[24px] lg:text-[40px] lg:leading-[48.41px] font-medium text-neutral800">
            Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
            molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem
            eros vitae. Netus ipsum sem tincidunt cursus.
          </h4>
          <p className="text-[16px] lg:text-[20px] text-neutral500">
            Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
            molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem
            eros vitae. Netus ipsum sem tincidunt cursus.
          </p>
        </div>
        <div className="">
          <img src={AboutUs2} className="max-w-[250px] lg:max-w-[505px]" />
          <img src={BgAboutUs} className="absolute top-[800px] left-32 -z-10" />
        </div>
      </div>
    </div>
  );
};

export default About;
