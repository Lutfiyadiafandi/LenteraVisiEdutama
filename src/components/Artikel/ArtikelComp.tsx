import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Atoms/Button";
import IconBtn from "../Atoms/IconBtn";

const Artikels = (props: any) => {
  const navigate = useNavigate();
  const navigateToContent = () => {
    navigate("/artikel_details");
  };
  return (
    <div className="w-full border-t-[1px] border-primary100 flex flex-col md:flex-row justify-between gap-2 md:gap-5 xxl:gap-10 pt-4">
      <div
        key={props.id}
        className="flex items-center gap-4 grow md:gap-8 md:items-start"
      >
        <img
          src={props.img}
          className="w-[120px] md:w-[240px] h-[80px] md:h-[160px] rounded-2xl"
        />
        <h3 className="font-medium text-type-l md:text-heading-m text-primary500">
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
