import { FaArrowRight } from "react-icons/fa";

const IconBtn = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center">
      {title}
      <FaArrowRight
        className={`ml-1 text-neutral900 group-hover:text-neutral30 transition-all ease-in-out duration-300`}
      />
    </div>
  );
};
export default IconBtn;
