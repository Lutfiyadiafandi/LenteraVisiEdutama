import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BundlingSkeleton = () => {
  return (
    <div className="w-[600px] flex flex-col gap-3 md:gap-4 p-3 md:p-5 bg-gradient-to-r from-gradient justify-between to-primary200 rounded-2xl mx-auto">
      <div className="flex flex-col gap-[10px] p-3 md:p-5 rounded bg-primary300">
        <Skeleton height={40} />
        <Skeleton height={30} />
        <Skeleton height={130} />
        <Skeleton height={20} />
        <Skeleton height={20} />
      </div>
    </div>
  );
};

export default BundlingSkeleton;
