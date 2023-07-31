import React, { useState } from "react";
import Button from "../atoms/Button";
import { useAxios } from "../../hooks/useAxios";
import HeadingTitle from "../atoms/HeadingTitle";

const Bundling = () => {
  const [response, loading, error] = useAxios("bundling");

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-5 xxl:px-0 mt-[50px] md:mt-20 mb-10">
      <div className="mb-5 md:mb-10">
        <HeadingTitle title={"Bundling"} />
      </div>

      <div className="flex flex-wrap justify-between gap-10">
        {error ? (
          <p>{error.message}</p>
        ) : (
          response?.map((bundle: any) => (
            <div
              key={bundle.id}
              className="w-[600px] flex flex-col gap-3 md:gap-4 p-3 md:p-5 bg-gradient-to-r from-gradient justify-between to-primary200 rounded-2xl mx-auto"
            >
              <div className="flex flex-col gap-[10px] p-3 md:p-5 rounded bg-primary300 text-neutral0">
                <h4 className="font-semibold text-type-l md:text-heading-s">
                  {bundle.title}
                </h4>
                <h5 className="font-medium text-type-l">
                  {bundle.totalproduct}
                </h5>
                <ul className="list-inside">
                  {bundle.products.map((item: any) => (
                    <li
                      className="font-medium list-disc md:text-type-m"
                      key={item.products_id}
                    >
                      {item.products_title}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-center">
                  <p className="font-medium text-type-m">
                    <s>{bundle.price}</s>
                  </p>
                  <p className="font-semibold text-type-l">
                    {bundle.discountprice}
                  </p>
                </div>
              </div>
              <div className="w-full rounded-lg">
                <Button
                  children={"Book Now"}
                  variant={"primary"}
                  to={`/service/bundling/${bundle.slug}`}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Bundling;
