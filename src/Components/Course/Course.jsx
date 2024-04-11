import { LuDollarSign } from "react-icons/lu";
import { IoMdBook } from "react-icons/io";

const Course = ({ course, handleCourseName }) => {
  const { img, course_name, credit, price, detail } = course;
  return (
    <div className="h-[460px] bg-[#fff] shadow-lg">
      <img src={img} className="rounded" />
      <div className="px-2 py-3">
        <h2 className="text-[17px] font-semibold text-[#1c1b1b">
          {course_name}
        </h2>
        <p className="text-[14px] text-justify my-1 text-[#1e1e1e]">{detail}</p>
        <div className="flex justify-between">
          <p className="flex gap-2 items-center">
            <LuDollarSign />
            Price: {price}
          </p>
          <p className="flex gap-2 items-center">
            <IoMdBook />
            Credit: {credit}
          </p>
        </div>
        <div className="bg-[#2F80ED] w-10/12 mx-auto my-3 flex justify-center">
          <button
            className="p-2 text-white font-bold"
            onClick={()=> handleCourseName(course)}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
