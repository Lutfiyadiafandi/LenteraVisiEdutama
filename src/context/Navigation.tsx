import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/img/Logo.webp";

const Navigation = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
      path: "/about",
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
      path: "/contact",
    },
  ];
  return (
    <header data-aos="fade-down" className="w-full navShadow">
      <div className="max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
        <div className="relative items-center justify-between px-2 py-5 sm:flex">
          <div>
            <Link to={"/"}>
              <img
                src={Logo}
                className="w-10 md:w-14 xl:w-20"
                alt="logo-image"
              />
            </Link>
          </div>
          <div>
            <ul className="hidden sm:flex">
              {navs.map((nav) => (
                <li
                  key={nav.id}
                  className="ml-6 font-medium capitalize cursor-pointer text-type-m text-primary500 hover:text-primary200"
                >
                  <NavLink to={nav.path}>{nav.link}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setNav(!nav)}
            className="absolute z-50 rounded-md cursor-pointer right-2 top-6 text-primary500 sm:hidden"
          >
            {nav ? (
              <FaTimes size={30} color="#12465E" />
            ) : (
              <FaBars size={30} color="#12465E" />
            )}
          </div>

          {nav && (
            <div className="sm:hidden">
              <ul className="flex flex-col items-start gap-2 mt-5">
                {navs.map((nav) => (
                  <li
                    key={nav.id}
                    className="py-1 font-medium capitalize cursor-pointer text-type-l text-primary500 hover:text-primary200"
                  >
                    <NavLink onClick={() => setNav(!nav)} to={nav.path}>
                      {nav.link}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
