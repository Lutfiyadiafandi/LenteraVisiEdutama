import React from "react";

const ModalDetail = (props: any) => {
  return (
    <div className="flex flex-col gap-5 detail">
      <h4 className="font-medium text-type-l md:text-heading-s text-neutral800">
        {props.title}
      </h4>
      <p className="font-medium text-type-s md:text-type-m text-neutral500">
        {props.desc}
      </p>
      <ul className="pl-5">
        <li className="font-medium list-disc text-type-s md:text-type-m text-neutral500">
          {props.list}
        </li>
        <li className="font-medium list-disc text-type-s md:text-type-m text-neutral500">
          {props.list}
        </li>
        <li className="font-medium list-disc text-type-s md:text-type-m text-neutral500">
          {props.list}
        </li>
        <li className="font-medium list-disc text-type-s md:text-type-m text-neutral500">
          {props.list}
        </li>
      </ul>
      <p className="font-medium text-type-s md:text-type-m text-neutral500">
        {props.text}
      </p>
    </div>
  );
};

export default ModalDetail;
