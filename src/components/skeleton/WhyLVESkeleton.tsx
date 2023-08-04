import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const WhyLVESkeleton = () => {
  return (
    <div className="flex flex-col flex-wrap justify-between gap-4 py-10 lg:flex-row">
      <div className="max-w-[350px] md:min-w-[400px] flex gap-4 py-5 px-4 bg-primary500 rounded-2xl">
        <div className="flex flex-none justify-center items-center w-[36px] h-[55px] p-2">
          <Skeleton width={30} height={40} />
        </div>
        <div className="grow">
          <Skeleton height={60} />
          <Skeleton height={25} count={2} />
        </div>
      </div>
      <div className="max-w-[350px] md:min-w-[400px] flex gap-4 py-5 px-4 bg-primary500 rounded-2xl">
        <div className="flex flex-none justify-center items-center w-[36px] h-[55px] p-2">
          <Skeleton width={30} height={40} />
        </div>
        <div className="grow">
          <Skeleton height={60} />
          <Skeleton height={25} count={2} />
        </div>
      </div>
      <div className="max-w-[350px] md:min-w-[400px] flex gap-4 py-5 px-4 bg-primary500 rounded-2xl">
        <div className="flex flex-none justify-center items-center w-[36px] h-[55px] p-2">
          <Skeleton width={30} height={40} />
        </div>
        <div className="grow">
          <Skeleton height={60} />
          <Skeleton height={25} count={2} />
        </div>
      </div>
    </div>
  );
};

export default WhyLVESkeleton;
