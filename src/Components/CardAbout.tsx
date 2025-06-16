import type { CardAboutProps } from "../Types/CardAbout";

const CardAbout = ({ Description, Icon, Title }: CardAboutProps) => {
  return (
    <>
      <div className="w-72 flex flex-col gap-3 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
        <i className="text-4xl text-blue-400 font-bold group-hover:scale-110 transition-all duration-300">
          {Icon}
        </i>
        <h1 className="font-bold text-3xl group-hover:scale-105 transition-all duration-300">
          {Title}
        </h1>
        <p className="text-gray-400">{Description}</p>
      </div>
    </>
  );
};

export default CardAbout;
