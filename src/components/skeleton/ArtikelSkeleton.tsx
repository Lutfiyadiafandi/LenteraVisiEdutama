import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArtikelSkeleton = () => {
  return (
    <div className="pt-[22px] flex flex-col gap-8">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="w-full border-t border-primary100 flex flex-col md:flex-row justify-between gap-2 md:gap-5 xxl:gap-10 pt-5"
        >
          <div className="flex gap-4 grow md:gap-8 ">
            <Skeleton width={180} height={130} className="w-1/2" />
            <Skeleton count={2} height={60} width={800} />
          </div>
          <div className="flex-none">
            <Skeleton height={40} width={180} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ArtikelSkeleton;
