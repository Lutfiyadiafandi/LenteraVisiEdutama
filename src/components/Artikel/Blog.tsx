import React from "react";
import { useNavigate } from "react-router-dom";
import ArtikelBlog from "../../assets/img/Img-ArtikelBlog.png";
import Button from "../Atoms/Button";

const Blog = () => {
  const navigate = useNavigate();
  const navigateToContent = () => {
    navigate("/artikelcontent");
  };
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
    <section className="max-w-screen-xl mx-auto px-4 xxl:px-0 mt-[50px] md:mt-[112px]">
      <h2 className="text-heading-s md:text-heading-m font-normal text-neutral800">
        Artikel Lainnya
      </h2>
      <div className="w-full flex flex-col md:flex-row gap-5 py-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="max-w-[400px] h-fit flex flex-col gap-4 p-4 border-[1px] border-neutral30 rounded-2xl cursor-pointer"
          >
            <div>
              <img src={blog.img} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-type-m md:text-type-l font-medium text-neutral900">
                {blog.title}
              </h3>
              <p className="text-type-s md:text-type-m font-normal text-neutral500">
                {blog.desc}
              </p>
            </div>
            <div>
              <Button
                children={"Read More"}
                onClick={() => navigateToContent()}
                size="full"
                colour={"neutral900"}
                hColour={"neutral30"}
                hBgColor={"primary300"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
