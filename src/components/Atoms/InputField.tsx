import React from "react";

type Props = {
  variant?: string;
  label: string;
  placeholder: string;
  color: string;
};

const InputField = ({ variant, label, placeholder, color }: Props) => {
  return variant === "area" ? (
    <div className="w-full flex flex-col gap-2">
      <label
        htmlFor={label}
        className={`text-type-m font-normal text-${color}`}
      >
        {label}
      </label>
      <textarea
        name={label}
        placeholder="Tulis pesan anda disini"
        rows={5}
        className="py-2 px-4 rounded-md border border-neutral10 text-type-m text-neutral900 focus:outline-none"
      ></textarea>
    </div>
  ) : (
    <div className="w-full flex flex-col gap-2">
      <label
        htmlFor={label}
        className={`text-type-m font-normal text-${color}`}
      >
        {label}
      </label>
      <input
        type="text"
        name={label}
        placeholder={placeholder}
        className="py-2 px-4 rounded-md border border-gradient text-type-m text-neutral900 focus:outline-none"
      />
    </div>
  );
};

export default InputField;
