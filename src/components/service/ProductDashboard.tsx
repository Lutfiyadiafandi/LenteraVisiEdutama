import ProductComp from "./ProductComp";
import { useAxios } from "../../hooks/useAxios";
import ProductSkeleton from "../skeleton/ProductSkeleton";
import HeadingTitle from "../atoms/HeadingTitle";

const ProductDashboard = () => {
  const [response, loading, error] = useAxios("product");

  return (
    <section className="max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <div className="mt-10 mb-5 md:mt-24 md:mb-10">
        <HeadingTitle title={"Layanan Kami"} />
      </div>

      <div className="flex justify-between lg:justify-normal flex-wrap gap-x-5 lg:gap-x-24 xxl:gap-x-[125px] gap-y-10 xl:gap-y-20">
        {response?.map((product: any) =>
          loading ? (
            <ProductSkeleton />
          ) : (
            <ProductComp
              key={product.id}
              slug={product.slug}
              image={product.image}
              title={product.title}
              instructor={product.instructor}
              time={product.time}
              location={product.location}
              price={product.price}
              discountprice={product.discountprice}
              description={product.description}
            />
          )
        )}
      </div>
    </section>
  );
};

export default ProductDashboard;
