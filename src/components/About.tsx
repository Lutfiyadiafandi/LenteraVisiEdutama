import React from "react";
import AboutUs from "../assets/img/Img-AboutUs.png";
import AboutUs2 from "../assets/img/Img-AboutUs2.png";

const About = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 xxl:px-0">
      <div className="w-5/6 flex bg-black">
        <img src={AboutUs2} className="w-[400px]" />
        <div>
          <h2 className="text-display2 font-semibold text-neutral800">
            Tentang Kami
          </h2>
          <p className="text-type-l font-normal text-neutral500">
            Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
            molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem
            eros vitae. Netus ipsum sem tincidunt cursus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
