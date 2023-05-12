import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const navs = [
    {
      id: 1,
      link: "home",
      path: "/home",
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
      link: "contact kami",
      path: "/",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="w-full flex justify-between items-center py-5 sm:py-10">
        <div className="px-4 xl:px-0">
          <img src={Logo} className="w-10 sm:w-14" />
        </div>
        <div>
          <ul className="hidden sm:flex">
            {navs.map(({ id, link, path }) => (
              <li
                key={id}
                className="px-3 cursor-pointer capitalize font-medium text-base text-primary500 hover:text-primary75"
              >
                <NavLink to={path}>{link}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer px-4 text-primary500 sm:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-20 right-0 w-full h-1/2 mx-auto bg-primary50 z-50">
            {navs.map(({ id, link, path }) => (
              <li
                key={id}
                className="py-3 cursor-pointer capitalize font-medium text-lg text-primary500 hover:text-primary75"
              >
                <NavLink onClick={() => setNav(!nav)} to={path}>
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navigation;
