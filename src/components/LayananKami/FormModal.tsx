import React from "react";
import { FaTimes } from "react-icons/fa";

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
      <div className="w-[720px] flex flex-col relative mx-auto px-4 xxl:px-0">
        <button
          onClick={() => onClose()}
          className="absolute top-2 right-6 xxl:right-2"
        >
          <FaTimes size={25} color="#3B4556" />
        </button>
        <div className="bg-neutral0 p-[100px] rounded-[20px]">Modal</div>
      </div>
    </div>
  );
};

export default FormModal;
