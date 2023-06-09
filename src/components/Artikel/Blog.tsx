import React from "react";
import { Link } from "react-router-dom";
import ArtikelBlog from "../../assets/img/Img-ArtikelBlog.png";
import Button from "../Atoms/Button";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      img: ArtikelBlog,
      title: "Example of Article title with 1 line",
      desc: "Lorem ipsum dolor sit amet consectetur. Lectus lacus dui odio egestas consectetur feugiat adipiscing.",
      link: "",
    },
    {
      id: 2,
      img: ArtikelBlog,
      title:
        "Example of Article title with 2 line, this is max amount of the title.",
      desc: "Lorem ipsum dolor sit amet consectetur. Lectus lacus dui odio egestas consectetur feugiat adipiscing.",
      link: "",
    },
    {
      id: 3,
      img: ArtikelBlog,
      title: "Example of Article title with 1 line",
      desc: "Lorem ipsum dolor sit amet consectetur. Lectus lacus dui odio egestas consectetur feugiat adipiscing.",
      link: "",
    },
  ];
  return (
    <section
      // data-aos="fade-down"
      // data-aos-duration="2000"
      className="max-w-screen-xl mx-auto px-4 md:px-5 xxl:px-0 mt-[50px] md:mt-[112px]"
    >
      <h2 className="font-semibold text-heading-m md:text-heading-xl text-neutral800">
        Artikel
      </h2>
      <div className="flex flex-col w-full gap-5 py-4 md:flex-row">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            // data-aos="fade-left"
            // data-aos-duration="2000"
            // data-aos-delay="300"
            className="max-w-[400px] flex flex-col justify-between gap-4 p-4 border border-neutral30 rounded-2xl cursor-pointer"
          >
            <div>
              <img src={blog.img} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-type-m md:text-type-l text-neutral900">
                {blog.title}
              </h3>
              <p className="font-normal text-type-s md:text-type-m text-neutral500">
                {blog.desc}
              </p>
            </div>
            <div>
              <Button
                children={"Read More"}
                variant={"primary"}
                to={`/artikel/details/${blog.id}`}
              />
            </div>
          </div>
        ))}
      </div>
      <h5 className="font-semibold text-right text-heading-s md:text-heading-m text-neutral800">
        <Link to={"/artikel"}>View All</Link>
      </h5>
    </section>
  );
};

export default Blog;
