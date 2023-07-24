import React from "react";

const ModalTitleBundling = (props: any) => {
  return (
    <div className="flex flex-col gap-5 judul">
      <h3 className="font-medium text-heading-s md:text-heading-l text-neutral800">
        {props.title}
      </h3>
      <p className="font-normal text-type-m md:text-type-l text-neutral500">
        {props.desc}
      </p>
      <ul className="list-inside">
        <li className="font-medium list-disc md:text-type-m">
          Self-Concept and Communication
        </li>
        <li className="font-medium list-disc md:text-type-m">
          Self-Healing and Communication
        </li>
        <li className="font-medium list-disc md:text-type-m">
          Business Communication Etiquette & You-Attitude
        </li>
        <li className="font-medium list-disc md:text-type-m">
          Readers Benefit In Every Message
        </li>
      </ul>
    </div>
  );
};

export default ModalTitleBundling;
