import Button from "../atoms/Button";

const ProductComp = (props: any) => {
  return (
    <div
      key={props.id}
      className="w-[330px] flex flex-col justify-between gap-4 py-5 px-4 border-2 border-gradient rounded-2xl mx-auto xl:mx-0 relative group"
    >
      <div className="flex flex-col items-center gap-5 md:gap-8">
        <div className="w-[112px]">
          <img src={props.image} />
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <h4 className="font-medium text-type-l text-primary300">
            {props.title}
          </h4>
          <div className="flex items-center gap-2">
            <p className="p-2 font-medium rounded-md text-type-s text-primary500 bg-primary75">
              {props.instructor}
            </p>
            <p className="font-normal text-type-s text-neutral800">
              {props.time}
            </p>
          </div>
          <p className="font-normal text-type-s text-neutral800">
            {props.location}
          </p>
          <div className="harga">
            <p className="font-medium text-type-m text-neutral500">
              <s>{props.price}</s>
            </p>
            <p className="font-semibold text-transparent text-type-l bg-clip-text bg-gradient-to-r from-gradient to-primary300">
              {props.discountprice}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 flex items-center h-0 px-4 overflow-hidden duration-700 opacity-0 group-hover:h-full group-hover:opacity-100 rounded-2xl bg-primary50">
        <p className="font-normal text-type-m text-neutral800">
          {props.description}
        </p>
      </div>
      <div className="z-10 w-full">
        <Button
          children={"Book Now"}
          variant={"primary"}
          to={`/service/${props.slug}`}
        />
      </div>
    </div>
  );
};

export default ProductComp;
