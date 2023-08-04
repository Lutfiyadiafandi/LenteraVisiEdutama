import React from "react";
import Button from "../atoms/Button";
import IconBtn from "../atoms/IconBtn";

const Artikels = (props: any) => {
  return (
    <div className="flex flex-col justify-between w-full gap-2 pt-4 border-t border-primary100 md:flex-row md:gap-5 xxl:gap-10">
      <div
        key={props.id}
        className="flex items-center gap-4 grow md:gap-8 md:items-start"
      >
        <img
          src={props.img}
          alt="article-image"
          className="w-[140px] md:w-[240px] h-[100px] md:h-[160px] rounded-2xl object-cover"
        />
        <h3 className="font-medium text-type-l md:text-heading-m text-primary500">
          {props.title}
        </h3>
      </div>
      <div className="flex-none">
        <Button
          children={<IconBtn title={"Read More"} />}
          variant={"secondary"}
          to={`/article/${props.slug}`}
        />
      </div>
    </div>
  );
};

export default Artikels;
