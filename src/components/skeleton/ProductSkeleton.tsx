import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div className="flex justify-between lg:justify-normal flex-wrap gap-x-5 lg:gap-x-24 xxl:gap-x-[125px] gap-y-10 xl:gap-y-20">
      <div className="w-[330px] flex flex-col justify-between gap-4 py-5 px-4 border-2 border-gradient rounded-2xl mx-auto xl:mx-0">
        <div className="flex flex-col gap-5 md:gap-8">
          <div className="mx-auto">
            <Skeleton circle width={112} height={112} />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton height={50} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} />
          </div>
        </div>
        <div>
          <Skeleton height={30} />
        </div>
      </div>
      <div className="w-[330px] flex flex-col justify-between gap-4 py-5 px-4 border-2 border-gradient rounded-2xl mx-auto xl:mx-0">
        <div className="flex flex-col gap-5 md:gap-8">
          <div className="mx-auto">
            <Skeleton circle width={112} height={112} />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton height={50} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} />
          </div>
        </div>
        <div>
          <Skeleton height={30} />
        </div>
      </div>
      <div className="w-[330px] flex flex-col justify-between gap-4 py-5 px-4 border-2 border-gradient rounded-2xl mx-auto xl:mx-0">
        <div className="flex flex-col gap-5 md:gap-8">
          <div className="mx-auto">
            <Skeleton circle width={112} height={112} />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton height={50} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} />
          </div>
        </div>
        <div>
          <Skeleton height={30} />
        </div>
      </div>
      <div className="w-[330px] flex flex-col justify-between gap-4 py-5 px-4 border-2 border-gradient rounded-2xl mx-auto xl:mx-0">
        <div className="flex flex-col gap-5 md:gap-8">
          <div className="mx-auto">
            <Skeleton circle width={112} height={112} />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton height={50} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} />
          </div>
        </div>
        <div>
          <Skeleton height={30} />
        </div>
      </div>
      <div className="w-[330px] flex flex-col justify-between gap-4 py-5 px-4 border-2 border-gradient rounded-2xl mx-auto xl:mx-0">
        <div className="flex flex-col gap-5 md:gap-8">
          <div className="mx-auto">
            <Skeleton circle width={112} height={112} />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton height={50} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} />
          </div>
        </div>
        <div>
          <Skeleton height={30} />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
