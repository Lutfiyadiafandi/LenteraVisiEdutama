import Bannerlogo from "../assets/img/Logo Black.png";
import Backgroundlogo from "../assets/svg/Backgroundlogo.svg";
import Background from "../assets/svg/Background.svg";

const Banner = () => {
  return (
    <div className="w-full h-screen relative">
      <div
        style={{
          backgroundImage: `url(${Background})`,
        }}
        className="absolute w-[1225px] h-[1085px] -top-[136px] right-0 -z-10"
      >
        <img src={Backgroundlogo} className="absolute right-0 top-56" />
      </div>
      <div className="max-w-screen-xl h-screen md:h-max mx-auto md:pt-[200px]">
        <div className="flex flex-col justify-center h-full w-full mx-auto px-2 xl:px-0">
          <h1 className="font-semibold text-[28px] sm:text-[48px] lg:text-[56px] text-neutral800 xl:leading-[67.77px]">
            Handal Berkomunikasi, Mudah Bersosialisasi, Miliki Sikap
            Profesional,Tampilkan Keunikan Diri, Capai Potensi Diri-Mu, &
            Jadilah Versi Terbaik Diri-Mu
          </h1>
          <h2 className="font-semibold text-[24px] sm:text-[40px] lg:text-[48px] text-neutral800 py-4 sm:py-[22px]">
            Bersama
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient to-primary300">
              {" "}
              Lentera Visi Edutama
            </span>
          </h2>
          <h4 className="font-medium text-[16px] sm:text-[22px] lg:text-[24px] text-neutral800 pt-2 sm:pt-5">
            Lembaga pelatihan pengembangan diri, dengan prinsip mengajar yang...
            <br />
            <a className="font-medium text-[16px] sm:text-[22px] lg:text-[24px] bg-clip-text text-transparent bg-gradient-to-r from-gradient to-primary300 cursor-pointer">
              Ketahui Lebih Lanjut
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
