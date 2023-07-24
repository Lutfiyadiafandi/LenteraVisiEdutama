import React from "react";

const ModalTitle = (props: any) => {
  return (
    <div className="flex flex-col gap-5 judul">
      <img src={props.image} alt="" className="w-20 h-20" />
      <h3 className="font-medium text-heading-s md:text-heading-l text-neutral800">
        {props.title}
      </h3>
      <p className="font-normal text-type-m md:text-type-l text-neutral500">
        {props.desc}
      </p>
    </div>
  );
};

export default ModalTitle;
