import React, { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const iconColor = "#12465E";
  const iconColor2 = "#A3C6D6";
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
    <header className="w-full shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 xxl:px-0">
        <div className="flex justify-between items-center py-5 px-2">
          <div>
            <img src={Logo} className="w-10 md:w-14 xl:w-20" />
          </div>
          <div>
            <ul className="hidden sm:flex">
              {navs.map((nav) => (
                <li
                  key={nav.id}
                  className="pl-6 cursor-pointer capitalize font-medium text-type-m text-primary500 hover:text-primary200 active:text-primary200 active:font-semibold"
                >
                  <NavLink to={nav.path}>{nav.link}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer text-primary500 sm:hidden rounded-md z-50"
          >
            {nav ? (
              <FaTimes size={30} color={iconColor2} />
            ) : (
              <FaBars size={30} color={iconColor} />
            )}
          </div>

          {nav && (
            <ul className="flex flex-col items-start px-10 w-3/4 h-screen absolute top-0 right-0 bg-primary500 pt-20 z-40">
              {navs.map((nav) => (
                <li
                  key={nav.id}
                  className="py-3 cursor-pointer capitalize font-medium text-type-l  text-primary50 hover:text-primary300"
                >
                  <NavLink onClick={() => setNav(!nav)} to={nav.path}>
                    {nav.link}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
