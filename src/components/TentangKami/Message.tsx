import React from "react";
import { NavLink } from "react-router-dom";
import Mesage from "../../assets/img/Img-Message.png";
import Button from "../Atoms/Button";

const Message = () => {
  return (
    <div className="w-full bg-primary300 mt-[100px]">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center gap-5 md:gap-20 py-20 px-4 xxl:px-0">
        <div>
          <img src={Mesage} className="w-[200px] md:w-full md:h-full" />
        </div>
        <div className="text-white flex flex-col gap-5 w-full sm:w-3/5">
          <h5 className="text-heading-m md:text-heading-xl font-medium text-center sm:text-left">
            Contact Us
          </h5>
          <p className="text-type-m md:text-type-l font-normal">
            Lorem ipsum dolor sit amet consectetur. Vitae arcu elementum
            elementum habitant amet pulvinar semper.
          </p>
          <div className="mx-auto md:mx-0">
            <Button
              children={<NavLink to="/contactus">Contact Now</NavLink>}
              onClick={(): void => {}}
              colour={"neutral900"}
              hColour={"neutral30"}
              hBgColor={"primary300"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
