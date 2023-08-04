import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogSkeleton = () => {
  return (
    <div className="flex flex-col w-full gap-5 py-4 md:flex-row">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="max-w-[400px] flex flex-col justify-between gap-4 p-4 border border-neutral30 rounded-2xl"
        >
          <Skeleton width={360} height={170} />
          <div className="flex flex-col gap-2">
            <Skeleton height={40} />
            <Skeleton height={20} count={2} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
