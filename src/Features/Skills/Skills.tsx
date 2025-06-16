import HeaderForSection from "../../Components/HeaderForSection";
import { SkillData } from "../../Data/Skills";
import { cn } from "../../lib/cn";
import type { SkillDataType } from "../../Types/SkillDataType";
import globalStyle from "../../Styles/global-style.module.css";

const Skills = () => {
  const { container } = globalStyle;
  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-center mt-56",
          container
        )}
      >
        <HeaderForSection
          LeftTitle="My"
          rightTitle="Skills"
          Description="Technologies and tools I work with"
        />
        <div className="grid grid-cols-2 w-full gap-8 my-14">
          {SkillData.map((skill: SkillDataType, index: number) => (
            <div
              key={index}
              className="group w-full p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-500"
            >
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">{skill.name}</h1>
                <p className="text-gray-400 text-lg font-semibold">
                  {skill.degree}
                </p>
              </div>
              <div className="w-full h-3 border border-slate-700 hover:border-slate-600 mt-4 rounded-full">
                <div
                  className={` h-3 rounded-l-full`}
                  style={{ width: skill.degree, backgroundColor: skill.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
