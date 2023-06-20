import React from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import InputField from "../Atoms/InputField";
import Button from "../Atoms/Button";
import IconBtn from "../Atoms/IconBtn";

const FormModal = ({
  isVisible,
  onClose,
}: {
  isVisible: any;
  onClose: any;
}) => {
  if (!isVisible) return null;
  const handleClose = (e: any) => {
    return e.target.id === "modal" ? onClose() : null;
  };
  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-[1px] flex justify-center items-center"
      id="modal"
    >
      <div className="w-full md:w-[720px] flex flex-col relative mx-auto px-4 xxl:px-0">
        <button
          onClick={() => onClose()}
          className="absolute top-2 right-6 xxl:right-2"
        >
          <FaTimes size={25} color="#3B4556" />
        </button>
        <div className="flex flex-col gap-3 bg-neutral0 p-10 md:p-[100px] rounded-[20px]">
          <InputField
            label={"Nama"}
            placeholder={"Nama anda"}
            color={"neutral900"}
          />
          <InputField
            label={"Email"}
            placeholder={"Email anda"}
            color={"neutral900"}
          />
          <InputField
            label={"Nomor Hp"}
            placeholder={"Nomor Hp anda"}
            color={"neutral900"}
          />
          <Button
            children={<IconBtn title={"Submit"} />}
            onClick={() => console.log("test")}
            size="full mt-3"
            colour={"neutral900"}
            hColour={"neutral30"}
            hBgColor={"primary300"}
          />
        </div>
      </div>
    </div>
  );
};

export default FormModal;
