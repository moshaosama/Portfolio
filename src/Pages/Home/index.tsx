import Hero from "../../Features/Hero/Hero";
import Header from "../../Layout/Header/Header";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-x">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default Home;
