import React from "react";
import Mail from "../assets/img/Message.png";

const Message = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gradient to-primary300 mt-[100px]">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center gap-5 md:gap-20 py-20">
        <div className="">
          <img src={Mail} className="max-w-[200px] sm:w-full" />
        </div>
        <div className="text-white flex flex-col gap-5 w-full sm:w-3/5 px-5">
          <h5 className="text-[28px] lg:text-[48px] text-center sm:text-left">
            Contact Us
          </h5>
          <p className="text-[18px] lg:text-[20px] font-normal">
            Lorem ipsum dolor sit amet consectetur. Vitae arcu elementum
            elementum habitant amet pulvinar semper.
          </p>
          <button className="w-[132px] rounded-lg bg-white text-neutral900 text-[16px] py-2 px-4 hover:bg-neutral-950 hover:text-white">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
