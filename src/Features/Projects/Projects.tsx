import HeaderForSection from "../../Components/HeaderForSection";
import { ProjectData } from "../../Data/ProjectData";
import type { ProjectDataType } from "../../Types/ProjectData";
import globalStyle from "../../Styles/global-style.module.css";
import { cn } from "../../lib/cn";
import { LuGithub } from "react-icons/lu";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router";

const Projects = () => {
  const { container } = globalStyle;
  return (
    <>
      <div
        className={cn(
          "mt-44 flex flex-col items-center gap-20 justify-center text-white",
          container
        )}
      >
        <HeaderForSection
          LeftTitle="My"
          rightTitle="Projects"
          Description="Here are some of my recent projects that showcase my skills and
            passion"
        />

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-y-10 gap-x-5">
          {ProjectData.map((project: ProjectDataType, index: number) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="overflow-hidden relative">
                {project.image !== "" ? (
                  <img
                    src={project.image}
                    alt="imageProject.png"
                    className="rounded-t-xl group-hover:scale-105 transition-all duration-700"
                  />
                ) : (
                  <div className="rounded-t-xl group-hover:scale-105 bg-gradient-to-r from-blue-400 to-purple-400 w-full h-56 transition-all duration-700"></div>
                )}
                <div className="absolute right-10 bottom-10 flex items-center gap-5">
                  <Link to={project.Github}>
                    <div className="p-2 bg-white/70 cursor-pointer backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                      <LuGithub color="black" size={30} />
                    </div>
                  </Link>
                  <Link to={project.LiveDemo}>
                    <div className="p-2 bg-white/70 cursor-pointer backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                      <HiExternalLink color="black" size={30} />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="px-10 py-3 flex flex-col gap-3">
                <h1 className="text-xl font-bold">{project.Title}</h1>
                <p className="text-md text-gray-400">{project.Description}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Link to={"https://github.com/moshaosama?tab=repositories"}>
            <button className="w-60 font-bold py-3 hover:shadow-blue-400 hover:shadow-sm hover:scale-105 cursor-pointer transition-all duration-300  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full">
              View More on GitHub
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
