import React from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import Button from "../Atoms/Button";
import IconBtn from "../Atoms/IconBtn";

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
        <Button
          children={<IconBtn title={"Read More"} />}
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
