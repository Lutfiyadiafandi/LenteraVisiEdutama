import IconBtn from "../atoms/IconBtn";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import HeadingTitle from "../atoms/HeadingTitle";

const Contact = () => {
  const [response, setResponse] = useState<any>();
  const baseUrl = "http://localhost:4000/api/contact";
  useEffect(() => {
    axios.get(baseUrl).then((resp) => {
      setResponse(resp.data.data);
    });
  }, []);

  const [data, setData] = useState({
    name: "",
    email: "",
    pesan: "",
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
    const formContact = {
      name: data.name,
      email: data.email,
      pesan: data.pesan,
    };
    axios
      .post("http://localhost:1337/api/form-contacts", { data: formContact })
      .catch((err) => console.log(err));

    Swal.fire({
      icon: "success",
      title: "Thank You For Sending the Message",
      showConfirmButton: false,
      timer: 2000,
    });
    return setData({
      name: "",
      email: "",
      pesan: "",
    });
  };
  return (
    <section className="flex flex-col justify-between mx-auto max-w-screen-xxl lg:flex-row">
      <div className="w-full md:w-1/2 px-4 md:px-5 xxl:px-10 flex flex-col mt-10 md:mt-[63px]">
        <HeadingTitle title={"Contact Us"} />
        <div className="mt-[20px] md:mt-[57px] flex flex-col gap-3 md:gap-6">
          <p className="font-medium text-type-l md:text-heading-s text-neutral800">
            <a href={`mailto:${response?.email}`} target="_blank">
              {response?.email}
            </a>
          </p>
          <p className="font-medium text-type-l md:text-heading-s text-neutral800">
            <a href={`https://wa.me/${response?.phonenumber}`} target="_blank">
              {response?.phonenumber}
            </a>
          </p>
        </div>
      </div>

      <div className="w-full mt-10 rounded-lg lg:mt-4 lg:w-1/2 bg-primary300">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-4/5 gap-5 py-20 pb-40 mx-auto xl:w-[520px]"
        >
          <div className="flex flex-col w-full gap-2">
            <label className="font-normal text-type-m text-neutral0">
              Nama
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={data.name}
              placeholder="Nama anda"
              className="py-2 px-4 rounded-md border border-[#D9DADD] text-type-m md:text-type-l text-neutral900 focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="font-normal text-type-m text-neutral0">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={data.email}
              placeholder="Email anda"
              className="py-2 px-4 rounded-md border border-[#D9DADD] text-type-m md:text-type-l text-neutral900 focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="font-normal text-type-m text-neutral0">
              Pesan
            </label>
            <textarea
              name="pesan"
              placeholder="Tulis pesan anda disini"
              required
              onChange={handleChange}
              value={data.pesan}
              rows={5}
              className="px-4 py-2 border rounded-md border-neutral10 text-type-m md:text-type-l text-neutral900 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mx-auto font-medium transition-all duration-300 ease-in-out border rounded-lg cursor-pointer text-type-m text-neutral900 bg-neutral0 border-gradient hover:bg-primary300 hover:text-neutral30 focus:outline-none group"
          >
            {<IconBtn title={"Submit"} />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
