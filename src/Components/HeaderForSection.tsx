import type { HeaderFroSectionProps } from "../Types/HeaderForSection";

const HeaderForSection = ({
  LeftTitle,
  rightTitle,
  Description,
}: HeaderFroSectionProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-5xl font-bold text-white">
        {LeftTitle}{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {rightTitle}
        </span>
      </h1>
      <p className="text-xl text-gray-300 w-[50pc] text-center">
        {Description}
      </p>
    </div>
  );
};

export default HeaderForSection;
