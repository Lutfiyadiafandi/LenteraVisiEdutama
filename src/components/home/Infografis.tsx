import { useEffect, useState } from "react";
import BgGrafis from "../../assets/svg/Bg-Infografis.svg";
import axios from "axios";
import HeadingTitle from "../atoms/HeadingTitle";
import Skeleton from "react-loading-skeleton";

const Infografis = () => {
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const baseUrl = `${process.env.REACT_APP_API_URL}/infografis`;
  useEffect(() => {
    axios
      .get(baseUrl, {
        withCredentials: true,
      })
      .then((resp) => {
        setTimeout(() => setLoading(false), 2000);
        setResponse(resp.data.data);
      });
  }, []);
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-5 xxl:px-0 mt-[100px] md:mt-[162px] relative">
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="flex flex-col order-1 gap-5 md:w-2/5">
          <HeadingTitle title={"Infografis"} />
          {loading ? (
            <Skeleton height={50} count={3} />
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: `${response?.description}` }}
              className="flex flex-col gap-3 font-normal text-type-l text-neutral500 font-inter"
            ></div>
          )}
        </div>
        <div className="flex justify-center w-4/5 mb-10 md:w-3/5">
          {loading ? (
            <Skeleton width={400} height={375} />
          ) : (
            <img src={response?.image} alt="infografis-image" />
          )}
          <img src={BgGrafis} className="absolute -left-20 -top-16" />
        </div>
      </div>
    </section>
  );
};

export default Infografis;
