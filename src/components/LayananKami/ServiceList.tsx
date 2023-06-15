import React from "react";
import Self from "../../assets/svg/Layanan-Self.svg";
import Love from "../../assets/svg/Layanan-Love.svg";
import Team from "../../assets/svg/Layanan-Team.svg";
import Icon from "../../assets/svg/Layanan-Icon.svg";
import Pray from "../../assets/svg/Layanan-Pray.svg";

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
    <section className="max-w-screen-xl mx-auto px-4 xxl:px-0">
      <div className="mt-10 md:mt-24 mb-5 md:mb-10">
        <h2 className="text-heading-m md:text-heading-xl font-semibold text-neutral800">
          Layanan Kami
        </h2>
      </div>

      <div className="flex justify-between xxl:justify-normal flex-wrap gap-x-5 xxl:gap-x-[125px] gap-y-10 xl:gap-y-20">
        {service.map((service) => (
          <div className="w-[330px] flex flex-col justify-between gap-4 py-5 px-4 border-2 border-gradient rounded-2xl mx-auto xl:mx-0">
            <div className="flex flex-col items-center gap-5 md:gap-8">
              <div className="img w-[112px]">
                <img src={service.logo} />
              </div>
              <div className="text-center flex flex-col items-center gap-2">
                <h4 className="text-type-l font-medium text-primary300">
                  {service.title}
                </h4>
                <div className="flex items-center gap-2">
                  <p className="text-type-s font-medium text-primary500 bg-primary75 p-2 rounded-md">
                    {service.doctor}
                  </p>
                  <p className="text-type-s font-normal text-neutral800">
                    {service.time}
                  </p>
                </div>
                <p className="text-type-s font-normal text-neutral800">
                  {service.loc}
                </p>
                <div className="harga">
                  <p className="text-type-m font-medium text-neutral500">
                    <s>{service.price}</s>
                  </p>
                  <p className="text-type-l font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gradient to-primary300">
                    {service.priceDisc}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <button className="w-full text-type-m font-medium text-neutral900 border border-gradient py-2 mx-auto rounded-lg hover:bg-primary300 hover:text-neutral30 cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;