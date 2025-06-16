import { useEffect, useState } from "react";
import Hero from "../../Features/Hero/Hero";
import Header from "../../Layout/Header/Header";
import About from "../../Features/About/About";
import Projects from "../../Features/Projects/Projects";
import Skills from "../../Features/Skills/Skills";
import TouchMail from "../../Features/TouchMail/TouchMail";
import TransitionProvider from "../../Context/TransitionContext";
import { FaChevronUp } from "react-icons/fa";
import useSetAnimate from "../../Hooks/useSetAnimate";
import { cn } from "../../lib/cn";
import SidebarProivder from "../../Context/SidebarContext";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const { isAnimate } = useSetAnimate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-x">
        <SidebarProivder>
          <Header />
        </SidebarProivder>
        <TransitionProvider>
          <Hero ScrollY={scrollY} />
          <About />
          <Projects />
          <Skills />
        </TransitionProvider>
        <TouchMail />
      </div>
      <a href="#">
        <div
          className={cn(
            "fixed transition-all duration-500 right-10 cursor-pointer bg-white w-10 h-10 flex justify-center items-center rounded-full",
            isAnimate ? "bottom-10" : "bottom-14"
          )}
        >
          <FaChevronUp />
        </div>
      </a>
    </>
  );
};

export default Home;
