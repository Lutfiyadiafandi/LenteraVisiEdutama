import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import ImgArtikel from "../../assets/img/Img-Artikel.png";
import ImgArtikel2 from "../../assets/img/Img-Artikel2.png";
import ImgArtikel3 from "../../assets/img/Img-Artikel3.png";
import ImgArtikel4 from "../../assets/img/Img-Artikel4.png";
import ImgArtikel5 from "../../assets/img/Img-Artikel5.png";

import ArtikelComp from "./ArtikelComp";
import Search from "./Search";

const ArtikelList = () => {
  const blogs = [
    {
      id: 1,
      img: ImgArtikel,
      title: "Pentingnya Team Work sebagai soft skill",
      link: "",
    },
    {
      id: 2,
      img: ImgArtikel2,
      title: "Komunikasi efektif adalah kunci kerjasama",
      link: "",
    },
    {
      id: 3,
      img: ImgArtikel3,
      title: "Tips menjalin relasi yang sukses",
      link: "",
    },
    {
      id: 4,
      img: ImgArtikel4,
      title: "Miliki sikap profesional untuk menjadi yang terbaik",
      link: "",
    },
    {
      id: 5,
      img: ImgArtikel5,
      title: "Kembangkan diri dengan bersosialisasi",
      link: "",
    },
  ];

  // SEARCH
  const [search, setSearch] = useState("");
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  // PAGE
  const [artikels, setArtikels] = useState(blogs);
  const [pageNumber, setPageNumber] = useState(0);
  const artikelsPerPage = 5;
  const pageCount = Math.ceil(artikels.length / artikelsPerPage);
  const pageVisited = pageNumber * artikelsPerPage;
  const displayArtikels = artikels
    .filter((artikel) => {
      return search.toLowerCase() === ""
        ? artikel
        : artikel.title.toLowerCase().includes(search);
    })
    .slice(pageVisited, pageVisited + artikelsPerPage)
    .map((artikel) => {
      return (
        <ArtikelComp img={artikel.img} title={artikel.title} key={artikel.id} />
      );
    });

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };
  return (
    <section className="max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <div className="mt-10 mb-8 md:mt-24 md:mb-14">
        <h2 className="font-semibold text-heading-m md:text-heading-xl text-neutral800">
          Artikel
        </h2>
      </div>
      <div>
        <Search find={handleSearch} />
        <div className="pt-[22px] flex flex-col gap-4">{displayArtikels}</div>
        <div className="flex justify-end w-full">
          <ReactPaginate
            previousLabel="&laquo;"
            nextLabel="&raquo;"
            onPageChange={changePage}
            pageCount={pageCount}
            containerClassName="paginationBtn"
            nextClassName="nextBtn"
            previousClassName="prevBtn"
            disabledClassName="disabledBtn"
            activeClassName="activeBtn"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtikelList;
