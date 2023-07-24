import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../atoms/Button";
import { useAxios } from "../../hooks/useAxios";
import HeadingTitle from "../atoms/HeadingTitle";

const Blog = () => {
  const { slug } = useParams();
  const [response, loading, error] = useAxios("artikel?title=");
  const artikel: any = response?.filter((item: any) => item.slug !== slug);

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-5 xxl:px-0 mt-[50px] md:mt-[112px]">
      <HeadingTitle title={"Artikel"} />
      <div className="flex flex-col w-full gap-5 py-4 md:flex-row">
        {error ? (
          <p>{error.message}</p>
        ) : (
          artikel?.slice(0, 3).map((artikel: any) => (
            <div
              key={artikel.id}
              className="max-w-[400px] flex flex-col justify-between gap-4 p-4 border border-neutral30 rounded-2xl"
            >
              <div>
                <img src={artikel.image} className="" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-type-l md:text-heading-s text-neutral900">
                  {artikel.title}
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: `${artikel?.content}` }}
                  className="font-normal text-type-s md:text-type-m text-neutral500 line-clamp-2"
                ></div>
              </div>
              <div>
                <Button
                  children={"Read More"}
                  variant={"primary"}
                  to={`/article/${artikel.slug}`}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <h5 className="font-semibold text-right text-heading-s md:text-heading-m text-neutral800">
        <Link to={"/article"}>View All</Link>
      </h5>
    </section>
  );
};

export default Blog;
