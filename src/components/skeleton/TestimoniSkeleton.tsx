import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TestimoniSkeleton = () => {
  return (
    <div className="w-full py-10 mx-auto lg:w-4/5">
      <div className="lg:ml-[50px] xxl:ml-[87px] max-w-[715px] max-h-max mx-auto rounded-2xl flex flex-col sm:flex-row justify-center items-center p-4 md:p-6 gap-4 border-[1px] border-gradient">
        <div className="flex-none w-[128px] h-[128px]">
          <Skeleton circle width={128} height={128} />
        </div>
        <div className="flex flex-col gap-2 grow">
          <Skeleton height={50} />
          <Skeleton height={25} count={3} />
        </div>
      </div>
    </div>
  );
};

export default TestimoniSkeleton;
