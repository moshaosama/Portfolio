import { useEffect, useState } from "react";
import Hero from "../../Features/Hero/Hero";
import Header from "../../Layout/Header/Header";
import About from "../../Features/About/About";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-x">
        <Header />
        <Hero ScrollY={scrollY} />
        <About />
      </div>
    </>
  );
};

export default Home;
