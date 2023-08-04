import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BannerSkeleton from "../skeleton/BannerSkeleton";

const Banner = () => {
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const baseUrl = `${process.env.REACT_APP_API_URL}/banner`;
  useEffect(() => {
    axios.get(baseUrl).then((resp) => {
      setTimeout(() => setLoading(false), 2000);
      setResponse(resp.data.data);
    });
  }, []);

  return (
    <section className="relative max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      {loading ? (
        <BannerSkeleton />
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col mt-[20px] md:mt-[72px]">
            <div className="w-full mb-[15px]">
              <h2 className="z-10 font-semibold text-heading-m md:text-heading-xl text-neutral800">
                {response?.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient to-primary300">
                  {response?.name}
                </span>
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-[13px] md:gap-[26px]">
              <p className="font-medium text-type-l md:text-heading-s text-neutral800">
                {response?.description}
              </p>
              <p className="font-medium text-type-m md:text-type-l text-neutral800">
                {response?.about}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient to-primary300 hover:cursor-pointer">
                  <Link to={"/about"}>{response?.link}</Link>
                </span>
              </p>
            </div>
          </div>

          <div className="mt-[34px] order-first md:order-last">
            <figure className="md:absolute md:top-32 xl:top-10 md:right-5 md:w-[393px] xl:w-[591.81px] mx-auto">
              <img
                src={response?.image}
                className="w-full"
                alt="banner-image"
              />
            </figure>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
