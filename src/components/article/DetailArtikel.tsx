import React, { useEffect, useState } from "react";
import { FaFacebook, FaPinterest, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import moment from "moment";

const ArtikelDetail = () => {
  moment.locale("id");
  const { slug } = useParams();
  const [response, loading, error] = useAxios(`artikel/${slug}`);
  const artikel: any = response;

  const url = window.location.href;
  const shareFb = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=#${url}`,
      "_blank"
    );
  };
  const sharePin = () => {
    console.log(window.location.href);
  };
  const shareTwt = () => {
    console.log(window.location.href);
  };
  const shareWa = () => {
    console.log(window.location.href);
  };

  return (
    <section className="max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      {error && <p>{error.message}</p>}
      <div className="w-full mt-8 md:mt-[74px]">
        {loading ? (
          <Skeleton className="w-[250px] h-[280px] xl:h-[504px]" />
        ) : (
          <img
            src={artikel?.image}
            className="object-cover w-full xxl:w-[1237px] xl:h-[504px] aspect-video rounded-lg md:rounded-xl lg:rounded-2xl"
          />
        )}
      </div>

      <div className="flex flex-col justify-between w-full gap-2 mt-5 md:flex-row">
        <div className="flex flex-col w-full md:w-4/5">
          <p className="font-medium text-type-s text-neutral100">
            {moment(artikel?.date).format("LL") || <Skeleton />}
          </p>
          <h2 className="font-medium text-heading-s md:text-heading-l text-primary500">
            {artikel?.title || <Skeleton height={50} />}
          </h2>
        </div>
        <div className="w-[100px] md:w-[156px]">
          <p className="text-type-s md:text-type-l font-normal text-neutral100 mb-[10px]">
            Share to:
          </p>
          <div className="flex gap-3 md:gap-[22px]">
            <FaFacebook
              size={20}
              onClick={shareFb}
              className="cursor-pointer text-neutral500"
            />
            <FaPinterest
              size={20}
              onClick={sharePin}
              className="cursor-pointer text-neutral500"
            />
            <FaTwitter
              size={20}
              onClick={shareTwt}
              className="cursor-pointer text-neutral500"
            />
            <FaWhatsapp
              size={20}
              onClick={shareWa}
              className="cursor-pointer text-neutral500"
            />
          </div>
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: `${artikel?.content}` }}
        className="flex flex-col w-full gap-5 pt-5 font-normal font-inter text-type-m md:text-type-l text-neutral500 md:w-4/5 md:pt-10 md:gap-10"
      ></div>
    </section>
  );
};

export default ArtikelDetail;
