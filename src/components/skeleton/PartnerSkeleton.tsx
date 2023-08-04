import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PartnerSkeleton = () => {
  return (
    <div className="flex w-full md:w-1/2 flex-wrap justify-center gap-5 sm:gap-[55px] lg:ml-14 py-10">
      {[...Array(4)].map((_, index) => (
        <Skeleton key={index} circle width={117} height={117} />
      ))}
    </div>
  );
};

export default PartnerSkeleton;
