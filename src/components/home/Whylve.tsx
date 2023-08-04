import { useEffect } from "react";
import { useAxios } from "../../hooks/useAxios";
import HeadingTitle from "../atoms/HeadingTitle";
import WhyLVESkeleton from "../skeleton/WhyLVESkeleton";

const Whylve = () => {
  const [response, loading, error] = useAxios("why-lve");

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-5 xxl:px-0 mt-[100px] md:mt-[150px] lg:mt-[300px]">
      <HeadingTitle title={"Kenapa Lentera Visi Edutama"} />
      <div className="flex flex-col flex-wrap justify-between gap-4 py-10 lg:flex-row">
        {loading ? (
          <WhyLVESkeleton />
        ) : (
          response?.map((data: any) => (
            <div
              key={data.id}
              className="max-w-[350px] md:min-w-[400px] flex gap-4 py-5 px-4 bg-primary500 rounded-2xl text-neutral0 mx-auto"
            >
              <div className="flex flex-none justify-center items-center w-[36px] h-[55px] bg-primary200 rounded-lg p-2">
                <h3 className="font-semibold text-heading-s md:text-heading-m text-neutral0">
                  {data.id}
                </h3>
              </div>
              <div className="grow">
                <h3 className="text-type-l md:text-heading-s font-semibold text-neutral0 mb-[10px]">
                  {data.title}
                </h3>
                <p className="font-medium text-type-m text-primary50">
                  {data.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Whylve;
