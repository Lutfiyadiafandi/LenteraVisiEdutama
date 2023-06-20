import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Atoms/Button";
import InputField from "../Atoms/InputField";
import IconBtn from "../Atoms/IconBtn";

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
            <div className="w-full">
              <Button
                children={<IconBtn title={"Submit"} />}
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
