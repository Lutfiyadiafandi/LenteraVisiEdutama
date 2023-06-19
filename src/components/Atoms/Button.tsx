import React, { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  size?: string;
  colour: string;
  hColour: string;
  hBgColor: string;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  size,
  colour,
  hColour,
  hBgColor,
}) => {
  return (
    <button
      className={`w-${size} text-type-m font-medium text-${colour} bg-neutral0 border border-gradient py-2 px-4 mx-auto rounded-lg hover:bg-${hBgColor} hover:text-${hColour} focus:outline-none cursor-pointer group`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
