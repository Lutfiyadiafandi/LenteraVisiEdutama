import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArtikelSkeleton = () => {
  return (
    <div className="flex flex-col justify-between w-full gap-2 pt-5 border-t border-primary100 md:flex-row md:gap-5 xxl:gap-10">
      <div className="flex gap-4 grow md:gap-8 ">
        <Skeleton width={180} height={130} className="w-1/2" />
        <Skeleton count={2} height={60} width={800} />
      </div>
      <div className="flex-none">
        <Skeleton height={40} width={180} />
      </div>
    </div>
  );
};
export default ArtikelSkeleton;
