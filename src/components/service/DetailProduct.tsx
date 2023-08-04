import React, { useEffect, useState } from "react";
import ModalDetail from "./ModalDetail";
import ModalTitle from "./ModalTitle";
import ModalRegist from "./ModalRegist";
import IconBtn from "../atoms/IconBtn";
import { useAxios } from "../../hooks/useAxios";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ProductDetail = () => {
  const { slug } = useParams();
  const [response, loading, error] = useAxios(`product/${slug}`);
  const product: any = response;
  const item = product?.title;

  const [contact, setContact] = useState<any>();
  const baseUrl = `${process.env.REACT_APP_API_URL}/contact`;
  useEffect(() => {
    axios.get(baseUrl).then((resp) => {
      setContact(resp.data.data);
    });
  }, []);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formProduct = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      product: item,
    };
    axios
      .post(`${process.env.REACT_APP_STRAPI_URL}/api/form-products`, {
        data: formProduct,
      })
      .catch((err) => console.log(err));

    Swal.fire(`Thank You!`, `You Have Ordered Our Service: ${item}`, "success");
    return setData({
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleClick = () => {
    const url = `https://wa.me/${contact.phonenumber}`;
    setTimeout(() => window.open(url, "_blank"), 5000);
  };

  return (
    <div className="w-full bg-neutral20 pt-[55px] pb-[107px] px-4 xxl:px-0">
      <section className="max-w-[1030px] mx-auto py-8 px-4 md:py-[50px] md:px-[120px] lg:py-[100px] lg:px-[210px] bg-neutral0 border border-neutral50 rounded-[30px]">
        <div className="flex flex-col gap-12 md:gap-20">
          {error && <p>{error.message}</p>}
          <div className="flex flex-col gap-6 md:gap-10">
            <ModalTitle
              image={product?.image}
              title={product?.title}
              desc={product?.description}
            />
            <ModalDetail detail={product?.detail} />
          </div>

          <div className="flex flex-col gap-6 md:gap-10">
            <ModalRegist text={product?.register} />
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 shadow-md bg-neutral0 p-5 md:p-10 border border-neutral30 rounded-[20px]"
            >
              <div className="flex flex-col w-full gap-2">
                <label className="font-normal text-type-m text-neutral900">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                  value={data.name}
                  placeholder="Nama anda"
                  className="py-2 px-4 rounded-md border border-[#D9DADD] text-type-m text-neutral900 focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="font-normal text-type-m text-neutral900">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  value={data.email}
                  placeholder="Email anda"
                  className="py-2 px-4 rounded-md border border-[#D9DADD] text-type-m text-neutral900 focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="font-normal text-type-m text-neutral900">
                  Nomor Handphone
                </label>
                <input
                  type="number"
                  name="phone"
                  required
                  onChange={handleChange}
                  value={data.phone}
                  placeholder="Nomor Whatsapp"
                  className="py-2 px-4 rounded-md border border-[#D9DADD] text-type-m text-neutral900 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                onClick={handleClick}
                className="w-full px-4 py-2 mx-auto font-medium transition-all duration-300 ease-in-out border rounded-lg cursor-pointer text-type-m text-neutral900 bg-neutral0 border-gradient hover:bg-primary300 hover:text-neutral30 focus:outline-none group"
              >
                {<IconBtn title={"Submit"} />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
