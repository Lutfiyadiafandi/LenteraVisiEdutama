import React from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

const Artikels = (props: any) => {
  const navigate = useNavigate();
  const navigateToContent = () => {
    navigate("/artikelcontent");
  };
  return (
    <div className="w-full border-t-[1px] border-primary100 flex flex-col md:flex-row justify-between gap-2 md:gap-20 pt-4">
      <div
        key={props.id}
        className="flex gap-4 md:gap-8 items-center md:items-start"
      >
        <img
          src={props.img}
          className="w-[120px] md:w-[240px] h-[80px] md:h-[160px] rounded-2xl"
        />
        <h3 className="text-type-l md:text-heading-m font-medium text-primary500">
          {props.title}
        </h3>
      </div>
      <div>
        <button
          onClick={navigateToContent}
          className="px-3 md:w-[160px] mx-auto py-[8.5px] flex justify-center items-center border-[1px] border-gradient rounded-lg text-type-s md:text-type-m font-medium text-neutral900 cursor-pointer hover:bg-primary300 hover:text-neutral30"
        >
          Read More <FaArrowRight className="ml-[6px] md:ml-3" />
        </button>
      </div>
    </div>
  );
};

export default Artikels;
