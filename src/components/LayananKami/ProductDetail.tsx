import React from "react";
import ModalDetail from "./ModalDetail";
import ModalTitle from "./ModalTitle";
import InputField from "../Atoms/InputField";
import Button from "../Atoms/Button";
import IconBtn from "../Atoms/IconBtn";
import Self from "../../assets/svg/Layanan-Self.svg";
import ModalRegist from "./ModalRegist";

const ProductDetail = () => {
  return (
    <div className="w-full bg-neutral20 pt-[55px] pb-[107px] px-4 xxl:px-0">
      <section className="max-w-[1030px] mx-auto py-8 px-7 md:py-[50px] md:px-[120px] lg:py-[100px] lg:px-[210px] bg-neutral0 border border-neutral50 rounded-[30px]">
        <div className="flex flex-col gap-12 md:gap-20">
          <div className="flex flex-col gap-6 md:gap-10">
            <ModalTitle
              image={Self}
              title="Judul Layanan"
              desc="Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem eros vitae. Netus ipsum sem tincidunt cursus."
            />
            <ModalDetail
              title="Detail"
              desc="Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem eros vitae. Netus ipsum sem tincidunt cursus."
              list="Lorem ipsum"
              text="Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem eros vitae. Netus ipsum sem tincidunt cursus."
            />
          </div>

          <div>
            <div className="flex flex-col gap-6 md:gap-10">
              <ModalRegist
                title="Daftar Sekarang"
                text=" Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
              molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem eros
              vitae. Netus ipsum sem tincidunt cursus."
              />
              <form className="flex flex-col gap-5 shadow-md bg-neutral0 p-10 border border-neutral30 rounded-[20px]">
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
                  placeholder={"Nomor Whatsapp"}
                  color={"neutral900"}
                />
                <Button
                  children={<IconBtn title={"Submit"} />}
                  variant={"primary"}
                  to={``}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
