import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  variant: string;
  to: string;
};

const Button = ({ children, variant, to }: Props) => {
  // const handleClick = () => {
  //   // window.scrollTo({ top: 0, behavior: "smooth" });
  //   document.documentElement.scrollTo({
  //     top: 0,
  //     left: 0,
  //   });
  //   // window.location.href = to;
  // };

  return variant === "primary" ? (
    <Link to={to}>
      <button
        className={`w-full text-type-m font-medium text-neutral900 bg-neutral0 border border-gradient py-2 px-4 mx-auto rounded-lg hover:bg-primary300 hover:text-neutral30 focus:outline-none cursor-pointer group transition-all ease-in-out duration-300`}
      >
        {children}
      </button>
    </Link>
  ) : (
    <Link to={to}>
      <button
        className={`text-type-m font-medium text-neutral900 bg-neutral0 border border-gradient py-2 px-4 mx-auto rounded-lg hover:bg-primary300 hover:text-neutral30 focus:outline-none cursor-pointer group transition-all ease-in-out duration-300`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
