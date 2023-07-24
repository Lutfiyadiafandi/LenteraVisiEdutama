import React from "react";

const ModalDetail = (props: any) => {
  return (
    <div className="flex flex-col gap-5 detail">
      <h4 className="font-medium text-type-l md:text-heading-s text-neutral800">
        Details
      </h4>

      <div
        dangerouslySetInnerHTML={{ __html: `${props.detail}` }}
        className="flex flex-col gap-5 font-normal text-type-m text-neutral500 font-inter"
      ></div>
    </div>
  );
};

export default ModalDetail;
