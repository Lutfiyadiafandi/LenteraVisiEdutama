import React from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import Button from "../Atoms/Button";

const Icons = () => {
  return (
    <div className="flex">
      Read More
      <FaArrowRight className="ml-[6px] md:ml-3 text-neutral900 group-hover:text-neutral30" />
    </div>
  );
};
const Artikels = (props: any) => {
  const navigate = useNavigate();
  const navigateToContent = () => {
    navigate("/artikelcontent");
  };
  return (
    <div className="w-full border-t-[1px] border-primary100 flex flex-col md:flex-row justify-between gap-2 md:gap-5 xxl:gap-10 pt-4">
      <div
        key={props.id}
        className="flex grow gap-4 md:gap-8 items-center md:items-start"
      >
        <img
          src={props.img}
          className="w-[120px] md:w-[240px] h-[80px] md:h-[160px] rounded-2xl"
        />
        <h3 className="text-type-l md:text-heading-m font-medium text-primary500">
          {props.title}
        </h3>
      </div>
      <div className="flex-none">
        {/* <button
          onClick={navigateToContent}
          className="px-3 md:w-[160px] mx-auto py-[8.5px] flex justify-center items-center border-[1px] border-gradient rounded-lg text-type-s md:text-type-m font-medium text-neutral900 cursor-pointer hover:bg-primary300 hover:text-neutral30"
        >
          Read More{" "}
          <FaArrowRight color="#010D23" className="ml-[6px] md:ml-3" />
        </button> */}
        <Button
          children={Icons()}
          onClick={() => navigateToContent()}
          colour={"neutral900"}
          hColour={"neutral30"}
          hBgColor={"primary300"}
        />
      </div>
    </div>
  );
};

export default Artikels;
