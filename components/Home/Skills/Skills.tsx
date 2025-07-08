import { skillsData } from "@/Data/data";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div id="Skills" className="pt-[12vh] -mt-[12vh] pb-16">
      <h1 className="w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase">
        Skills
      </h1>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skill) => {
          return (
            <div key={skill.id}>
              <SkillsCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
