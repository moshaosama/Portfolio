import { CiHome } from "react-icons/ci";
import { cn } from "../../lib/cn";
import globalStyle from "../../Styles/global-style.module.css";
import LinkHeader from "../../Components/LinkHeader";
import { IoCodeOutline, IoPersonOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import Sidebar from "../../Components/Sidebar";
import { useSidebarContext } from "../../Context/SidebarContext";
const Header = () => {
  const { container } = globalStyle;
  const [, setIsScroll] = useState(false);
  const { handleTriggerSidebar } = useSidebarContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={cn(
          container,
          "w-full z-50 flex justify-between items-center  transition-all duration-500"
        )}
      >
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400  bg-clip-text text-transparent">
          <h1 className="text-lg font-sans">Mohamed Osama</h1>
        </div>
        <div className="flex items-center gap-8 max-sm:hidden max-xl:gap-4">
          <LinkHeader linkIcon={<CiHome />} linkTitle="Home" LinkTo="#" />
          <LinkHeader
            linkIcon={<IoPersonOutline />}
            linkTitle="About"
            LinkTo="#About"
          />
          <LinkHeader
            linkIcon={<BsBagCheck />}
            linkTitle="Projects"
            LinkTo="#Projects"
          />
          <LinkHeader
            linkIcon={<IoCodeOutline />}
            linkTitle="Skills"
            LinkTo="#Skills"
          />
          <LinkHeader
            linkIcon={<MdOutlineEmail />}
            linkTitle="Contact"
            LinkTo="#Contact"
          />
        </div>
        <div className="sm:hidden">
          <CgMenu size={25} onClick={handleTriggerSidebar} />
          <Sidebar />
        </div>
      </header>
    </>
  );
};

export default Header;
