import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const WhyLVESkeleton = () => {
  return (
    <div className="max-w-[350px] md:min-w-[400px] flex gap-4 py-5 px-4 bg-primary500 rounded-2xl mx-auto">
      <div className="flex flex-none justify-center items-center w-[36px] h-[55px] p-2">
        <Skeleton width={30} height={40} />
      </div>
      <div className="grow">
        <Skeleton height={60} width={250} />
        <Skeleton height={25} count={2} width={250} />
      </div>
    </div>
  );
};

export default WhyLVESkeleton;
