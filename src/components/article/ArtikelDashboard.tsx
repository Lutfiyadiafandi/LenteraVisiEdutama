import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import ArtikelComp from "./ArtikelComp";
import Search from "./Search";
import axios from "axios";
import ArtikelSkeleton from "../skeleton/ArtikelSkeleton";
import HeadingTitle from "../atoms/HeadingTitle";

const ArtikelDashboard = () => {
  const [artikels, setArtikels] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [text, setText] = useState("");
  const [search, setSearch] = useState(false);
  const baseUrl = `${process.env.REACT_APP_API_URL}/artikel?title=${text}`;
  useEffect(() => {
    axios
      .get(baseUrl, {
        withCredentials: true,
      })
      .then((response) => {
        setTimeout(() => setLoading(false), 1000);
        setArtikels(response.data.data);
      });
  }, []);

  // SEARCH
  const handleSearch = (e: any) => {
    setText(e.target.value);
  };
  const handleClick = async () => {
    text === "" ? setSearch(false) : setSearch(true);
    try {
      await axios.get(baseUrl).then((response) => {
        setTimeout(() => setLoading(false), 1000);
        setArtikels(response.data.data);
      });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // PAGE
  const [pageNumber, setPageNumber] = useState(0);
  const artikelsPerPage = 5;
  const pageCount = Math.ceil(artikels.length / artikelsPerPage);
  const pageVisited = pageNumber * artikelsPerPage;
  let displayArtikels = artikels.slice(
    pageVisited,
    pageVisited + artikelsPerPage
  );
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <section className="max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <div className="mt-10 mb-8 md:mt-24 md:mb-14">
        <HeadingTitle title={"Artikel"} />
      </div>
      <div>
        <Search change={handleSearch} value={text} click={handleClick} />
        {search == true ? (
          <div>
            <div className="pt-[22px] flex flex-col gap-4">
              {displayArtikels.map((artikel: any) => (
                <ArtikelComp
                  key={artikel.id}
                  slug={artikel.slug}
                  img={artikel.image}
                  title={artikel.title}
                />
              ))}
            </div>
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
        ) : (
          <div>
            <div className="pt-[22px] flex flex-col gap-4">
              {loading ? (
                <ArtikelSkeleton />
              ) : (
                displayArtikels.map((artikel: any) => (
                  <ArtikelComp
                    key={artikel.id}
                    slug={artikel.slug}
                    img={artikel.image}
                    title={artikel.title}
                  />
                ))
              )}
            </div>
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
        )}
      </div>
    </section>
  );
};

export default ArtikelDashboard;
