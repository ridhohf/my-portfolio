import { experiencesData } from "@/Data/data";
import { FaCheck } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="Experience" className="pt-[12vh] -mt-[12vh] pb-16">
      <h1 className="w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase">
        Experience
      </h1>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 justify-center">
        {experiencesData.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-3 px-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-200">
              {exp.title}
            </h2>
            <p className="text-sm text-gray-400 font-semibold">
              {exp.company}
            </p>
            <p className="text-xs text-gray-500">{exp.year}</p>
            <div className="w-7 h-7 bg-blue-800 flex items-center justify-center">
              <FaCheck className="text-white text-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
