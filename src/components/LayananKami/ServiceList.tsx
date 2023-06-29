import React, { useState } from "react";
import Self from "../../assets/svg/Layanan-Self.svg";
import Love from "../../assets/svg/Layanan-Love.svg";
import Team from "../../assets/svg/Layanan-Team.svg";
import Icon from "../../assets/svg/Layanan-Icon.svg";
import Pray from "../../assets/svg/Layanan-Pray.svg";
import ProductComp from "./ProductComp";

const ServiceList = () => {
  const service = [
    {
      id: 1,
      logo: Self,
      title: "Self-Concept & Communication",
      doctor: "By Dr. Karsih",
      time: "60 menit",
      loc: "Daring atau Luring",
      price: "Rp.50.000,-",
      priceDisc: "Rp.30.000,-",
      form: "",
    },
    {
      id: 2,
      logo: Love,
      title: "Self-Healing & Communication",
      doctor: "By Dr. Karsih",
      time: "60 menit",
      loc: "Daring atau Luring",
      price: "Rp.50.000,-",
      priceDisc: "Rp.30.000,-",
      form: "",
    },
    {
      id: 3,
      logo: Team,
      title: "Team Work Building",
      doctor: "By Dr. Karsih",
      time: "60 menit",
      loc: "Daring atau Luring",
      price: "Rp.50.000,-",
      priceDisc: "Rp.30.000,-",
      form: "",
    },
    {
      id: 4,
      logo: Icon,
      title: "Business Communication Ettiquette & You-Attitude",
      doctor: "By Dr. Karsih",
      time: "60 menit",
      loc: "Daring atau Luring",
      price: "Rp.50.000,-",
      priceDisc: "Rp.30.000,-",
      form: "",
    },
    {
      id: 5,
      logo: Pray,
      title: "Readers Benefit in Every Message",
      doctor: "By Dr. Karsih",
      time: "60 menit",
      loc: "Daring atau Luring",
      price: "Rp.50.000,-",
      priceDisc: "Rp.30.000,-",
      form: "",
    },
  ];
  return (
    <section className="max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <div className="mt-10 mb-5 md:mt-24 md:mb-10">
        <h2 className="font-semibold text-heading-m md:text-heading-xl text-neutral800">
          Layanan Kami
        </h2>
      </div>

      <div className="flex justify-between lg:justify-normal flex-wrap gap-x-5 lg:gap-x-24 xxl:gap-x-[125px] gap-y-10 xl:gap-y-20">
        {service.map((service) => (
          <ProductComp
            key={service.id}
            id={service.id}
            logo={service.logo}
            title={service.title}
            doctor={service.doctor}
            time={service.time}
            loc={service.loc}
            price={service.price}
            priceDisc={service.priceDisc}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
