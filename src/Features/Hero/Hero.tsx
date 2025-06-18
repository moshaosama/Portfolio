import { MdKeyboardArrowDown } from "react-icons/md";
import SocialMedia from "../../Components/SocialMedia";
import useChangeText from "../../Hooks/useChangeText";
import useSetAnimate from "../../Hooks/useSetAnimate";
import { cn } from "../../lib/cn";
import type { HeroProps } from "../../Types/Hero";
import { useTransitionContext } from "../../Context/TransitionContext";
import { Link } from "react-router-dom";

const Hero = ({ ScrollY }: HeroProps) => {
  const { isAnimate } = useSetAnimate();
  const { text } = useChangeText();
  const { isTextHero } = useTransitionContext();

  return (
    <>
      <div className="min-h-[52pc] max-sm:min-h-[37pc] text-white flex items-center justify-center relative overflow-hidden">
        <div
          className={cn(
            "absolute left-10 w-20 h-20 rounded-full transition-all duration-1000 bg-blue-500/20",
            isAnimate ? "top-20" : "top-16"
          )}
        ></div>
        <div
          className={cn(
            "absolute right-20 w-32 h-32 rounded-full transition-all duration-1000 bg-purple-500/20",
            isAnimate ? "top-40" : "top-36"
          )}
        ></div>
        <div
          className={cn(
            "absolute left-20 w-16 h-16 rounded-full transition-all duration-1000 bg-pink-500/20",
            isAnimate ? "bottom-20" : "bottom-24"
          )}
        ></div>

        <div
          className="flex flex-col gap-10 justify-center items-center"
          style={{ transform: `translateY(${ScrollY * 0.5}px)` }}
        >
          <h1
            className={cn(
              "relative text-7xl font-bold transition-all duration-1000 max-sm:text-4xl",
              isTextHero ? "top-0 opacity-100" : "top-8 opacity-0"
            )}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
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
            <a
              target="_blank"
              href={
                "https://drive.google.com/file/d/1Rf3kUzlh7tw5vVVeiTN8vHzfp1dIR4Ha/view?usp=drivesdk"
              }
            >
              <button className="py-3 w-40 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full transition-all duration-300 cursor-pointer hover:shadow-blue-400 hover:shadow-sm hover:scale-105">
                View My Work
              </button>
            </a>

            <a href="#Contact">
              <button className="py-3 w-40 rounded-full border-2 border-white transition-all duration-300 cursor-pointer hover:scale-105">
                Get In Touch
              </button>
            </a>
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
