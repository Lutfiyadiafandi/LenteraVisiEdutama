import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Atoms/Button";
import InputField from "../Atoms/InputField";
import IconBtn from "../Atoms/IconBtn";

const Contact = () => {
  return (
    <section className="w-full mx-auto">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-[63px]">
          <h2 className="font-semibold text-heading-m md:text-heading-xl text-neutral800">
            Contact Us
          </h2>
          <div className="mt-[20px] md:mt-[57px] flex flex-col gap-3 md:gap-6">
            <p className="font-medium text-type-l md:text-heading-s text-neutral800">
              contact@lentera.com
            </p>
            <p className="font-medium text-type-l md:text-heading-s text-neutral800">
              +6281234567890
            </p>
          </div>
        </div>

        <div className="w-full mt-4 md:w-1/2 bg-neutral900">
          <form
            action=""
            className="flex flex-col items-center w-4/5 gap-5 py-20 mx-auto md:w-3/4"
          >
            <InputField
              label={"Nama"}
              placeholder={"Nama anda"}
              color={"neutral0"}
            />
            <InputField
              label={"Email"}
              placeholder={"Email anda"}
              color={"neutral0"}
            />
            <InputField
              variant={"area"}
              label={"Pesan"}
              placeholder={"Tulis Pesan anda disini"}
              color={"neutral0"}
            />
            <div className="w-full hover:text-neutral30 hover:bg-neutral900">
              <Button
                children={<IconBtn title={"Submit"} />}
                onClick={() => console.log("test")}
                size="full"
                colour="neutral900"
                hColour="text-neutral30"
                hBgColor="neutral900"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
