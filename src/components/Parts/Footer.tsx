import react, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import Salt from "../../assets/img/SaltAcademy.png";

const Footer = () => {
  const navs = [
    {
      id: 1,
      link: "home",
      path: "/",
    },
    {
      id: 2,
      link: "tentang kami",
      path: "/tentangkami",
    },
    {
      id: 3,
      link: "layanan kami",
      path: "/layanankami",
    },
    {
      id: 4,
      link: "artikel",
      path: "/artikel",
    },
    {
      id: 5,
      link: "contact us",
      path: "/contactus",
    },
  ];
  return (
    <footer className="max-w-screen-xl mx-auto px-4 xxl:px-0">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-10 pt-10 pb-16 px-10 md:px-0">
        <div>
          <img src={Logo} className="w-8 md:w-10" />
          <p className="text-label-l font-medium text-neutral800 pt-4">
            &copy;Copyright 2023 Lentera Visi Edutama
          </p>
        </div>
        <div className="md:w-[305px]">
          <ul className="flex flex-col md:flex-row flex-wrap gap-x-6 gap-y-2 md:gap-y-4">
            {navs.map((nav) => (
              <li
                key={nav.id}
                className="cursor-pointer capitalize font-normal text-type-m text-neutral800 hover:text-neutral100"
              >
                <NavLink to={nav.path}>{nav.link}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-label-l font-normal text-neutral200">
            Collaboration with
          </p>
          <div className="flex items-center">
            <img src={Salt} className="w-12 md:w-[60px]" />
            <p className="text-[14px] font-medium text-neutral200">
              SALT ACADEMY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
