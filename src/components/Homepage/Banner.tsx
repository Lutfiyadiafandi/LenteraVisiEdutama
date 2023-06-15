import Hero from "../../assets/svg/Banner-Hero.svg";

const Banner = () => {
  return (
    <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row relative px-4 xxl:px-0">
      <div className="flex flex-col mt-[20px] md:mt-[72px]">
        <div className="w-full mb-[15px]">
          <h2 className="text-heading-m md:text-heading-xl font-semibold text-neutral800">
            Bersama{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient to-primary300">
              Lentera Visi Edutama
            </span>
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-[13px] md:gap-[26px]">
          <p className="text-type-l md:text-heading-s font-medium text-neutral800">
            Handal Berkomunikasi, Mudah Bersosialisasi, Miliki Sikap
            Profesional, Tampilkan Keunikan Diri, Capai Potensi Diri-Mu, &
            Jadilah Versi Terbaik Diri-Mu
          </p>
          <p className="text-type-m md:text-type-l font-medium text-neutral800">
            Lembaga pelatihan pengembangan diri, dengan prinsip mengajar yang...
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient to-primary300 hover:cursor-pointer">
              Ketahui Lebih Lanjut
            </span>
          </p>
        </div>
      </div>

      <div className="mt-[34px] order-first md:order-last">
        <figure className="md:absolute md:top-32 xl:top-10 md:right-5 md:w-[393px] xl:w-[591.81px] mx-auto">
          <img src={Hero} alt="" className="w-full" />
        </figure>
      </div>
    </section>
  );
};

export default Banner;