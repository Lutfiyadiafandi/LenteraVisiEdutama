import React from "react";
import { useAxios } from "../../hooks/useAxios";
import HeadingTitle from "../atoms/HeadingTitle";
import PartnerSkeleton from "../skeleton/PartnerSkeleton";

const Partner = () => {
  const [response, loading, error] = useAxios("partner");
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-5 xxl:px-0 mt-[100px] md:mt-[248px]">
      <div className="flex flex-wrap">
        <HeadingTitle title={"Partner Kami"} />
        <div className="flex w-full md:w-1/2 flex-wrap justify-center gap-5 sm:gap-[55px] lg:ml-14 py-10">
          {response?.map((data: any) =>
            loading ? (
              <PartnerSkeleton />
            ) : (
              <div className="w-[117px] h-[117px]" key={data.id}>
                <img src={data.logo} alt="partner-image" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Partner;
