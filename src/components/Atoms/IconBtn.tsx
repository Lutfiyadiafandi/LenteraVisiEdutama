import { FaArrowRight } from "react-icons/fa";

const IconBtn = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center">
      {title}
      <FaArrowRight
        className={`ml-1 text-neutral900 group-hover:text-neutral30`}
      />
    </div>
  );
};
export default IconBtn;
