import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Banner = () => {
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const baseUrl = "http://localhost:4000/banner";
  useEffect(() => {
    axios.get(baseUrl).then((resp) => {
      setTimeout(() => setLoading(false), 2000);
      setResponse(resp.data.data[0]);
      AOS.init();
      AOS.refresh();
    });
  }, []);

  return (
    <section className="relative flex flex-col max-w-screen-xl px-4 mx-auto md:flex-row md:px-5 xxl:px-0">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="flex flex-col mt-[20px] md:mt-[72px]"
      >
        <div className="w-full mb-[15px]">
          <h2 className="z-10 font-semibold text-heading-m md:text-heading-xl text-neutral800">
            {response?.title || <Skeleton />}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient to-primary300">
              {response?.name || <Skeleton />}
            </span>
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-[13px] md:gap-[26px]">
          <p className="font-medium text-type-l md:text-heading-s text-neutral800">
            {response?.description || <Skeleton count={4} />}
          </p>
          <p className="font-medium text-type-m md:text-type-l text-neutral800">
            {response?.about || <Skeleton count={2} />}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient to-primary300 hover:cursor-pointer">
              <Link to={"/aboutus"}>{response?.link || <Skeleton />}</Link>
            </span>
          </p>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="mt-[34px] order-first md:order-last"
      >
        <figure className="md:absolute md:top-32 xl:top-10 md:right-5 md:w-[393px] xl:w-[591.81px] mx-auto">
          {loading ? (
            <Skeleton circle className="w-[200px] h-[250px] lg:h-[450px]" />
          ) : (
            <img src={response?.image} className="w-full" />
          )}
        </figure>
      </div>
    </section>
  );
};

export default Banner;

// useEffect(() => {
//   AOS.init();
//   AOS.refresh();
// }, []);
