import { aboutInfo } from "@/Data/data";
import React from "react";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div id="About" className="pt-[12vh] -mt-[12vh] pb-16">
      <h1 className="w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase">
        About me
      </h1>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        <h1 className="text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
          {aboutInfo.title}
        </h1>
        <p className="mt-5 text-base text-gray-100">{aboutInfo.description}</p>
        <div className="mt-1 flex items-center gap-3">
          <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
            <FaCheck className="text-white" />
          </div>
          <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
            Frontend Development
          </p>
        </div>
        <div className="mt-1 flex items-center gap-3">
          <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
            <FaCheck className="text-white" />
          </div>
          <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
            Backend Development
          </p>
        </div>
        <div className="mt-1 flex items-center gap-3">
          <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
            <FaCheck className="text-white" />
          </div>
          <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
            Full Stack Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
