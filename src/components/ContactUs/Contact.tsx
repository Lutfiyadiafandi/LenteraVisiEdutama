import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Atoms/Button";

const Icons = () => {
  return (
    <div className="flex justify-center">
      Submit
      <FaArrowRight className="ml-1 text-neutral900 group-hover:text-neutral30" />
    </div>
  );
};
const Contact = () => {
  return (
    <section className="w-full mx-auto">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-[63px]">
          <h2 className="text-heading-m md:text-heading-xl font-semibold text-neutral800">
            Contact Us
          </h2>
          <div className="mt-[20px] md:mt-[57px] flex flex-col gap-3 md:gap-6">
            <p className="text-type-l md:text-heading-s font-medium text-neutral800">
              contact@lentera.com
            </p>
            <p className="text-type-l md:text-heading-s font-medium text-neutral800">
              +6281234567890
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-neutral900 mt-4">
          <form
            action=""
            className="flex flex-col items-center gap-5 w-4/5 md:w-3/4 py-20 mx-auto"
          >
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="nama"
                className="text-type-m font-normal text-neutral0"
              >
                Nama
              </label>
              <input
                type="text"
                name="nama"
                placeholder="Nama anda"
                className="py-2 px-4 rounded-md text-type-m text-neutral900"
              />
            </div>
            <div className="w-full flex flex-col  gap-2">
              <label
                htmlFor="email"
                className="text-type-m font-normal text-neutral0"
              >
                Email Address
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email anda"
                className="py-2 px-4 rounded-md text-type-m text-neutral900"
              />
            </div>
            <div className="w-full flex flex-col  gap-2">
              <label
                htmlFor="pesan"
                className="text-type-m font-normal text-neutral0"
              >
                Pesan
              </label>
              <textarea
                name="message"
                placeholder="Tulis pesan anda disini"
                rows={5}
                className="py-2 px-4 rounded-md text-type-m text-neutral900"
              ></textarea>
            </div>

            <div className="w-full">
              <Button
                children={Icons()}
                onClick={() => console.log("test")}
                size="full"
                colour={"neutral900"}
                hColour={"neutral30"}
                hBgColor={"neutral900"}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
