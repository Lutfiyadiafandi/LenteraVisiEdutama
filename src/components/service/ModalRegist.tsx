import React from "react";

const ModalRegist = (props: any) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-medium text-heading-s md:text-heading-l text-neutral800">
        Daftar Sekarang
      </h3>
      <p className="font-normal text-type-m md:text-type-l text-neutral500">
        {props.text}
      </p>
    </div>
  );
};

export default ModalRegist;
