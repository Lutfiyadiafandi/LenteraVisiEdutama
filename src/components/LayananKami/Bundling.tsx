import React from "react";
import Button from "../Atoms/Button";

const Bundling = () => {
  const bundle = [
    {
      id: 1,
      title: "Individual Bundling",
      desc: "4 Kursus Daring",
      item: {
        item1: "Self-Concept and Communication",
        item2: "Self-Healing and Communication",
        item3: "Business Communication Etiquette & You-Attitude",
        item4: "Readers Benefit In Every Message",
      },

      price: "Rp.263.000,-",
      priceDisc: " Rp. 105.000,-",
    },
    {
      id: 2,
      title: "Corporate Bundling (min. 8pax)",
      desc: "5 Kursus Daring    ",
      item: {
        item1: "Self-Concept and Communication",
        item2: "Self-Healing and Communication",
        item3: "Team-Work Building",
        item4: "Business Communication Ettiquette & You-Attitude",
      },

      price: "Rp.318.000,-",
      priceDisc: " Rp. 105.000,-",
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto px-4 xxl:px-0 mt-[50px] md:mt-20 mb-10">
      <div className="mb-5 md:mb-10">
        <h2 className="text-heading-m md:text-heading-xl font-semibold text-neutral800">
          Bundling
        </h2>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-10">
        {bundle.map((bundle) => (
          <div
            key={bundle.id}
            className="w-[600px] flex flex-col gap-3 md:gap-4 p-3 md:p-5 bg-gradient-to-r from-gradient to-primary200 rounded-2xl mx-auto"
          >
            <div className="flex flex-col gap-[10px] p-3 md:p-5 rounded bg-primary300 text-neutral0">
              <h4 className="text-type-l md:text-heading-s font-semibold">
                {bundle.title}
              </h4>
              <h5 className="text-type-m md:text-type-l font-medium">
                {bundle.desc}
              </h5>
              <ul className="pl-4">
                <li className="list-disc text-type-s md:text-type-m font-medium">
                  {bundle.item.item1}
                </li>
                <li className="list-disc text-type-s md:text-type-m font-medium">
                  {bundle.item.item2}
                </li>
                <li className="list-disc text-type-s md:text-type-m font-medium">
                  {bundle.item.item3}
                </li>
                <li className="list-disc text-type-s md:text-type-m font-medium">
                  {bundle.item.item4}
                </li>
              </ul>

              <div className="flex flex-col items-center">
                <p className="text-type-m font-medium">
                  <s>{bundle.price}</s>
                </p>
                <p className="text-type-l font-semibold">{bundle.priceDisc}</p>
              </div>
            </div>
            <div className="w-full rounded-lg">
              <Button
                children={"Book Now"}
                onClick={function (): void {
                  console.log("button is ok");
                }}
                size="full"
                colour={"neutral900"}
                hColour={"neutral30"}
                hBgColor={"primary300"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bundling;
