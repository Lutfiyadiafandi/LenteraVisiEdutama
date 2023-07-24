import react, { useState } from "react";
import { NavLink } from "react-router-dom";

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
      path: "/aboutus",
    },
    {
      id: 3,
      link: "layanan kami",
      path: "/service",
    },
    {
      id: 4,
      link: "artikel",
      path: "/article",
    },
    {
      id: 5,
      link: "contact us",
      path: "/contactus",
    },
  ];
  return (
    <footer className="max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <div className="flex flex-col justify-between gap-10 px-10 pt-10 pb-10 md:pb-16 md:flex-row md:items-center md:px-0">
        <div>
          <img
            src="http://localhost:3000/images/Logo.webp"
            className="w-8 md:w-10"
          />
          <p className="pt-4 font-medium text-label-l text-neutral800">
            &copy;Copyright 2023 Lentera Visi Edutama
          </p>
        </div>
        <div className="md:w-[310px]">
          <ul className="flex flex-col flex-wrap md:flex-row gap-x-6 gap-y-2 md:gap-y-4">
            {navs.map((nav) => (
              <li
                key={nav.id}
                className="font-normal capitalize cursor-pointer text-type-m text-neutral800 hover:text-neutral100"
              >
                <NavLink to={nav.path}>{nav.link}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-normal text-label-l text-neutral200">
            Collaboration with
          </p>
          <div className="flex items-center">
            <img
              src="http://localhost:3000/images/Salt.webp"
              className="w-12 md:w-[60px]"
            />
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
