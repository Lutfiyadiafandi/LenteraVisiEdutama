import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = (props: any) => {
  return (
    <div className="w-full md:w-4/5 lg:w-3/5 flex justify-between items-center gap-2 md:gap-4 border-[1px] border-neutral30 rounded-md p-[10px]">
      <FaSearch size={30} color="#1E739A" />
      <input
        type="search"
        name="search"
        onChange={props.change}
        value={props.value}
        placeholder="Search here..."
        className="w-full md:w-[519px] py-2 md:py-3 px-2 text-type-s md:text-type-m font-medium text-neutral900 focus:outline-gradient"
      />

      <button
        className="w-[120px] py-2 text-type-s md:text-type-m text-neutral900 font-medium border border-gradient rounded mx-auto hover:bg-primary300 hover:text-neutral30"
        onClick={props.click}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
