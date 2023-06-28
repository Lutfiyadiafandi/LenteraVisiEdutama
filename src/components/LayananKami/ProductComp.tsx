import React from "react";
import Button from "../Atoms/Button";
import { useNavigate } from "react-router-dom";

const ProductComp = (props: any) => {
  const navigate = useNavigate();
  const navigateToContent = () => {
    navigate("/layanankami_productdetails");
  };
  return (
    <div
      key={props.id}
      className="w-[330px] flex flex-col justify-between gap-4 py-5 px-4 border-2 border-gradient rounded-2xl mx-auto xl:mx-0"
    >
      <div className="flex flex-col items-center gap-5 md:gap-8">
        <div className="img w-[112px]">
          <img src={props.logo} />
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <h4 className="font-medium text-type-l text-primary300">
            {props.title}
          </h4>
          <div className="flex items-center gap-2">
            <p className="p-2 font-medium rounded-md text-type-s text-primary500 bg-primary75">
              {props.doctor}
            </p>
            <p className="font-normal text-type-s text-neutral800">
              {props.time}
            </p>
          </div>
          <p className="font-normal text-type-s text-neutral800">{props.loc}</p>
          <div className="harga">
            <p className="font-medium text-type-m text-neutral500">
              <s>{props.price}</s>
            </p>
            <p className="font-semibold text-transparent text-type-l bg-clip-text bg-gradient-to-r from-gradient to-primary300">
              {props.priceDisc}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Button
          children={"Book Now"}
          onClick={() => navigateToContent()}
          size="full"
          colour={"neutral900"}
          hColour={"neutral30"}
          hBgColor={"primary300"}
        />
      </div>
    </div>
  );
};

export default ProductComp;
