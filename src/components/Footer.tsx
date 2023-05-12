import Logo from "../assets/img/logo.png";
import Salt from "../assets/img/salt.png";

const Footer = () => {
  return (
    <div className="px-100 py-10 mt-[500px] flex justify-between bg-slate-400">
      <div className="flex flex-col justify-center">
        <img src={Logo} className="w-10" />
        <p className="text-[8px] text-neutral800 mt-4">
          Copyright 2023 Lentera Visi Edutama
        </p>
      </div>

      <div>
        <p className="text-[10px] text-[#595959]">Collaboration with</p>
        <div className="flex items-center">
          <img src={Salt} className="w-[60px]" />
          <h5 className="text-sm text-[#595959]">SALT ACADEMY</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
