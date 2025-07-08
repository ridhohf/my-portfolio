import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div id="Projects" className="pt-[12vh] -mt-[12vh] pb-16">
      <h1 className="w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase">
        My Projects
      </h1>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project) => {
          return (
            <div
              key={project.id}
              className="bg-blue-950 p-6 rounded-lg hover:scale-105 trasition-all duration-300"
            >
              <Link href={project.url} target="-blank">
                <Image
                  src={project.image}
                  alt="project"
                  width={300}
                  height={200}
                  className="w-full"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
