import React from "react";
import { FaFacebook, FaPinterest, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ArtikelImg from "../../assets/img/Img-ArtikelBanner.png";

const ArtikelDetail = (props: any) => {
  return (
    <section className="max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <div className="w-full mt-8 md:mt-[74px]">
        <img src={ArtikelImg} className="object-cover w-full rounded-2xl" />
      </div>

      <div className="flex flex-col justify-between w-full gap-2 mt-5 md:flex-row">
        <div className="flex flex-col w-full md:w-4/5">
          <p className="font-medium text-type-s text-neutral100">Artikel</p>
          <h2 className="font-medium text-heading-s md:text-heading-l text-primary500">
            Pentingnya Team Work sebagai soft skill
          </h2>
        </div>
        <div className="w-[100px] md:w-[156px]">
          <p className="text-type-s md:text-type-l font-normal text-neutral100 mb-[10px]">
            Share to:
          </p>
          <div className="flex gap-3 md:gap-[22px]">
            <FaFacebook size={20} className="cursor-pointer text-neutral500" />
            <FaPinterest size={20} className="cursor-pointer text-neutral500" />
            <FaTwitter size={20} className="cursor-pointer text-neutral500" />
            <FaWhatsapp size={20} className="cursor-pointer text-neutral500" />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-5 pt-5 md:w-4/5 md:pt-10 md:gap-10">
        <p className="font-normal text-type-m md:text-type-l text-neutral500">
          Lorem ipsum dolor sit amet consectetur. Enim feugiat blandit vitae
          adipiscing felis scelerisque. Faucibus vulputate metus ipsum et justo.
          Nullam sed eu suscipit facilisi auctor augue. Condimentum vivamus
          elementum amet ultrices blandit etiam faucibus.
        </p>
        <p className="font-normal text-type-m md:text-type-l text-neutral500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa unde
          tempora impedit at porro illum nesciunt maxime dolores, a omnis itaque
          quas voluptatum, debitis totam perspiciatis consequatur excepturi
          doloribus ab veniam, incidunt inventore animi autem similique. Quos
          vel nam aspernatur illum officia quibusdam. Sed unde, velit error
          asperiores nostrum magnam consequuntur ullam vel placeat similique
          beatae pariatur ex iure molestiae neque facilis atque quas laborum,
          assumenda natus hic? Earum natus pariatur sit aut accusantium ea magni
          quod aperiam tempora eum culpa inventore doloribus minima, ex iusto
          sint ab iure numquam totam placeat veniam unde optio illum accusamus!
          Ullam, id optio?
        </p>
        <p className="font-normal text-type-m md:text-type-l text-neutral500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, earum
          eum ex praesentium placeat rem nulla debitis blanditiis in, maxime
          quas corrupti nemo nam, quis iusto modi. Iusto voluptatum dignissimos
          doloribus ad, temporibus reiciendis, qui, similique tempore laborum
          voluptate illo inventore beatae eius et exercitationem! Harum
          laboriosam facilis nemo voluptates soluta dolorum odit deserunt cum,
          consequatur repellat consectetur nisi placeat sequi, ad ut nobis
          exercitationem delectus officiis in veniam deleniti porro suscipit.
          Temporibus eum rerum aliquam, dolorem consequuntur minus numquam
          consectetur laudantium commodi hic mollitia ullam autem velit corporis
          impedit nulla possimus corrupti natus dolorum reiciendis omnis vero
          recusandae? At, odio maiores itaque aliquam doloribus veritatis
          consectetur provident laudantium amet harum recusandae praesentium eos
          pariatur fuga labore nesciunt possimus aut velit dignissimos dolor
          quam. Vel delectus voluptatibus, labore eaque praesentium a, expedita
          accusantium tenetur fuga minus quia ipsam aut non iusto sunt commodi
          incidunt dolorem rem eligendi perferendis ipsum impedit.
        </p>
      </div>
    </section>
  );
};

export default ArtikelDetail;
