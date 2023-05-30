import Hero from "../assets/svg/Banner-Hero.svg";

const Banner = () => {
  return (
    <section className="max-w-screen-xl mx-auto flex relative">
      <div className="flex flex-col mt-[72px]">
        <div className="mb-[15px]">
          <h2 className="text-heading-xl font-semibold text-neutral800">
            Bersama{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient to-primary300">
              Lentera Visi Edutama
            </span>
          </h2>
        </div>
        <div className="w-1/2 flex flex-col gap-[26px]">
          <p className="text-heading-s font-medium text-neutral-800">
            Handal Berkomunikasi, Mudah Bersosialisasi, Miliki Sikap
            Profesional, Tampilkan Keunikan Diri, Capai Potensi Diri-Mu, &
            Jadilah Versi Terbaik Diri-Mu
          </p>
          <p className="text-type-l font-medium text-neutral-800">
            Lembaga pelatihan pengembangan diri, dengan prinsip mengajar yang..
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient to-primary300">
              Ketahui Lebih Lanjut
            </span>
          </p>
        </div>
      </div>

      <div className="mt-[34px]">
        <figure className="absolute right-0">
          <img src={Hero} alt="" className="w-[591.81px] h-[393.92px]" />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
