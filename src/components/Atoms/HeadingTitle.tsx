import React from "react";

const HeadingTitle = (props: any) => {
  return (
    <h2 className="font-semibold text-heading-m md:text-heading-xl text-neutral800">
      {props.title}
    </h2>
  );
};

export default HeadingTitle;
