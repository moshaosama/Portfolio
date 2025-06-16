import { MdKeyboardArrowDown } from "react-icons/md";
import SocialMedia from "../../Components/SocialMedia";
import useChangeText from "../../Hooks/useChangeText";
import useSetAnimate from "../../Hooks/useSetAnimate";
import { cn } from "../../lib/cn";
import type { HeroProps } from "../../Types/Hero";
import { useTransitionContext } from "../../Context/TransitionContext";

const Hero = ({ ScrollY }: HeroProps) => {
  const { isAnimate } = useSetAnimate();
  const { text } = useChangeText();
  const { isTextHero } = useTransitionContext();

  return (
    <>
      <div className="min-h-[52pc] max-sm:min-h-[37pc] text-white flex items-center justify-center relative overflow-hidden">
        <div
          className={cn(
            "absolute left-10 w-20 h-20 bg-blue-500/20 rounded-full transition-all duration-1000",
            isAnimate ? "top-20" : "top-16"
          )}
        ></div>
        <div
          className={cn(
            "absolute right-20 w-32 h-32 bg-purple-500/20 rounded-full transition-all duration-1000",
            isAnimate ? "top-40" : "top-36"
          )}
        ></div>
        <div
          className={cn(
            "absolute  left-20 w-16 h-16 bg-pink-500/20 rounded-full transition-all duration-1000",
            isAnimate ? "bottom-20" : "bottom-24"
          )}
        ></div>

        <div
          className="flex justify-center flex-col items-center gap-10"
          style={{ transform: `translateY(${ScrollY * 0.5}px)` }}
        >
          <h1
            className={cn(
              "text-7xl font-bold max-sm:text-4xl transition-all duration-1000 relative",
              isTextHero ? " top-0 opacity-100" : " top-8 opacity-0"
            )}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mohamed
            </span>
          </h1>
          <p className="text-3xl text-gray-300">{text}|</p>
          <p className="w-[48pc] max-sm:w-[23pc] max-sm:text-lg font-semibold text-gray-300 text-center text-xl">
            Passionate about creating beautiful, functional, and user-friendly
            digital experiences with cutting-edge technologies and creative
            problem-solving.
          </p>
          <SocialMedia /> {/* Social Media Component */}
          <div className="flex gap-5">
            <button className="w-40 py-3 hover:shadow-blue-400 hover:shadow-sm hover:scale-105 cursor-pointer transition-all duration-300  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full">
              View My Work
            </button>

            <button className="w-40 py-3 border-2 border-white rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
              Get In Touch
            </button>
          </div>
        </div>
        <div
          className={cn(
            "absolute transition-all duration-700",
            isAnimate ? "bottom-5" : "bottom-10"
          )}
        >
          <MdKeyboardArrowDown size={40} />
        </div>
      </div>
      <hr className="h-0.5 border-none bg-blue-400 w-full" />
    </>
  );
};

export default Hero;
