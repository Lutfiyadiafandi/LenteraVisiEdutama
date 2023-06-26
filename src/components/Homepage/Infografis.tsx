import BgGrafis from "../../assets/svg/Bg-Infografis.svg";
import Grafis from "../../assets/svg/Grafis.svg";

const Infografis = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-5 xxl:px-0 mt-[100px] md:mt-[162px] relative">
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="flex flex-col order-1 gap-5 md:w-2/5">
          <h2 className="font-semibold text-heading-m md:text-heading-xl text-neutral800">
            Infografis
          </h2>
          <p className="font-normal text-type-m text-neutral500">
            Lorem ipsum dolor sit amet consectetur. Tortor morbi sed auctor
            volutpat ultrices. Volutpat sapien turpis arcu tortor quam sagittis
            ut mollis. Pellentesque ornare euismod proin quis tincidunt
            accumsan.
          </p>
        </div>
        <div className="flex justify-center w-4/5 mb-10 md:w-3/5">
          <img src={Grafis} />
          <img src={BgGrafis} className="absolute -left-20 -top-16" />
        </div>
      </div>
    </section>
  );
};

export default Infografis;
