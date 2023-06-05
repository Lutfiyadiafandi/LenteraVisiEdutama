import React, { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [nav, setNav] = useState(false);
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
    <div className="shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 xxl:px-0">
        <div className="w-full flex justify-between items-center py-5">
          <div className="">
            <img src={Logo} className="w-10 md:w-14 xl:w-20" />
          </div>
          <div>
            <ul className="hidden sm:flex">
              {navs.map(({ id, link, path }) => (
                <li
                  key={id}
                  className="pl-6 cursor-pointer capitalize font-medium text-type-m text-primary500 hover:text-primary200 active:text-primary200 active:font-semibold"
                >
                  <NavLink to={path}>{link}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer text-primary500 sm:hidden"
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
    </div>
  );
};

export default Navigation;
