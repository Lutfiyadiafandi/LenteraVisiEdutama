import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VisiMisi = () => {
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const baseUrl = `${process.env.REACT_APP_API_URL}/visimisi`;
  useEffect(() => {
    axios.get(baseUrl).then((resp) => {
      setTimeout(() => setLoading(false), 2000);
      setResponse(resp.data.data);
    });
  }, []);
  return (
    <section className="max-w-screen-xl mx-auto md:px-5 px-4 xxl:px-0 mt-[120px]">
      <div className="flex flex-col items-end w-full">
        <div className="w-full xl:w-5/6 flex flex-col md:flex-row-reverse gap-10 lg:gap-[70px]">
          {loading ? (
            <Skeleton width={400} height={450} />
          ) : (
            <img
              src={response?.image}
              className="w-[400px] mx-auto md:mx-0"
              alt="visimisi-image"
            />
          )}
          <div className="flex flex-col justify-center gap-5 lg:gap-10">
            <h2 className="font-semibold text-heading-l lg:text-display2 text-neutral800">
              Visi & Misi
            </h2>
            {loading ? (
              <Skeleton width={500} height={50} count={3} />
            ) : (
              <div
                dangerouslySetInnerHTML={{ __html: `${response?.description}` }}
                className="flex flex-col gap-3 font-normal text-type-l text-neutral500 font-inter"
              ></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
