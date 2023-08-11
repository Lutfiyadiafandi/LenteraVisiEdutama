import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BannerSkeleton = () => {
  return (
    <div className="flex flex-col w-full md:mt-[70px] md:flex-row">
      <div className="flex flex-col order-last w-full gap-5 md:order-first md:w-7/12">
        <Skeleton height={70} />
        <Skeleton height={120} />
        <Skeleton height={40} />
      </div>
      <div className="flex justify-center order-first md:order-last md:w-5/12">
        <Skeleton width={350} height={350} />
      </div>
    </div>
  );
};

export default BannerSkeleton;
