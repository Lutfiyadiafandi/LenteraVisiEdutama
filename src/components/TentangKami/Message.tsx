import React from "react";
import { NavLink } from "react-router-dom";
import Mesage from "../../assets/img/Img-Message.png";
import Button from "../Atoms/Button";

const Message = () => {
  return (
    <div className="w-full bg-primary300 mt-[100px]">
      <div className="flex flex-col items-center max-w-screen-xl gap-5 px-4 py-20 mx-auto sm:flex-row md:gap-20 md:px-5 xxl:px-0">
        <div>
          <img src={Mesage} className="w-[200px] md:w-full md:h-full" />
        </div>
        <div className="flex flex-col w-full gap-5 text-white sm:w-3/5">
          <h5 className="font-medium text-center text-heading-m md:text-heading-xl sm:text-left">
            Contact Us
          </h5>
          <p className="font-normal text-type-m md:text-type-l">
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
