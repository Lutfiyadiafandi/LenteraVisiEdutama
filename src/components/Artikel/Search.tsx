import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../Atoms/Button";

const Search = (props: any) => {
  return (
    <div className="w-full md:w-1/2 flex justify-between items-center gap-2 md:gap-4 border-[1px] border-neutral30 rounded-md p-[10px]">
      <FaSearch size={30} color="#1E739A" />
      <input
        type="search"
        name="search"
        onChange={props.find}
        placeholder="Search here..."
        className="w-full py-[10px] px-2 text-type-s md:text-type-m font-normal text-neutral900 focus:outline-gradient"
      />

      <Button children={"Search"} variant={"secondary"} to={""} />
    </div>
  );
};

export default Search;
