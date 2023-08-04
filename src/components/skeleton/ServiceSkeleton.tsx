import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ServiceSkeleton = () => {
  return (
    <div className="flex justify-center max-w-screen-xl gap-5">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="h-[234px] items-center justify-center flex rounded-2xl border-2 border-gradient"
        >
          <div className="w-[248px] md:w-[259px] flex flex-col items-center justify-center mx-3 md:mx-4 my-5 gap-3">
            <Skeleton circle width={100} height={100} />
            <Skeleton height={30} width={200} count={2} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSkeleton;
