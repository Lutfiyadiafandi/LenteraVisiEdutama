import BgGrafis from "../assets/svg/BgInfog.svg";
import Grafis from "../assets/svg/Grafis.svg";

const Infografis = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 xxl:px-0 mt-[100px] md:mt-[162px] relative">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="md:w-2/5 order-1 flex flex-col gap-5">
          <h2 className="text-heading-m md:text-heading-xl font-semibold text-neutral800">
            Infografis
          </h2>
          <p className="text-type-m font-normal text-neutral500">
            Lorem ipsum dolor sit amet consectetur. Tortor morbi sed auctor
            volutpat ultrices. Volutpat sapien turpis arcu tortor quam sagittis
            ut mollis. Pellentesque ornare euismod proin quis tincidunt
            accumsan.
          </p>
        </div>
        <div className="w-4/5 md:w-3/5 flex justify-center mb-10">
          <img src={Grafis} />
          <img src={BgGrafis} className="absolute -left-20 -top-16" />
        </div>
      </div>
    </section>
  );
};

export default Infografis;
