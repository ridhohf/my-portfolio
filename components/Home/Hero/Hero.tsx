import { BaseInfo } from "@/Data/data";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
              {BaseInfo.name}
            </h1>
            <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
              {BaseInfo.position}
            </h1>
          </div>
          <div className="mx-auto hidden lg:block rounded-full border-[3.5px] border-blue-950 overflow-x-hidden">
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
