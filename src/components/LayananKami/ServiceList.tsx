import React, { useState } from "react";
import Self from "../../assets/svg/Layanan-Self.svg";
import Love from "../../assets/svg/Layanan-Love.svg";
import Team from "../../assets/svg/Layanan-Team.svg";
import Icon from "../../assets/svg/Layanan-Icon.svg";
import Pray from "../../assets/svg/Layanan-Pray.svg";
import FormModal from "./FormModal";
import Button from "../Atoms/Button";

const ServiceList = () => {
  const [showModal, setShowModal] = useState(false);
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
          <div
            key={service.id}
            className="w-[330px] flex flex-col justify-between gap-4 py-5 px-4 border-2 border-gradient rounded-2xl mx-auto xl:mx-0"
          >
            <div className="flex flex-col items-center gap-5 md:gap-8">
              <div className="img w-[112px]">
                <img src={service.logo} />
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <h4 className="font-medium text-type-l text-primary300">
                  {service.title}
                </h4>
                <div className="flex items-center gap-2">
                  <p className="p-2 font-medium rounded-md text-type-s text-primary500 bg-primary75">
                    {service.doctor}
                  </p>
                  <p className="font-normal text-type-s text-neutral800">
                    {service.time}
                  </p>
                </div>
                <p className="font-normal text-type-s text-neutral800">
                  {service.loc}
                </p>
                <div className="harga">
                  <p className="font-medium text-type-m text-neutral500">
                    <s>{service.price}</s>
                  </p>
                  <p className="font-semibold text-transparent text-type-l bg-clip-text bg-gradient-to-r from-gradient to-primary300">
                    {service.priceDisc}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Button
                children={"Book Now"}
                onClick={() => setShowModal(true)}
                size="full"
                colour={"neutral900"}
                hColour={"neutral30"}
                hBgColor={"primary300"}
              />
            </div>
            <FormModal
              isVisible={showModal}
              onClose={() => setShowModal(false)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
