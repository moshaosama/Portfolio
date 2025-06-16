import { CgClose } from "react-icons/cg";
import { useSidebarContext } from "../Context/SidebarContext";
import { cn } from "../lib/cn";
import { BsBagCheck } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { IoPersonOutline, IoCodeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import LinkHeader from "./LinkHeader";

const Sidebar = () => {
  const { isOpen, handleTriggerSidebar } = useSidebarContext();
  return (
    <>
      <div
        className={cn(
          "fixed top-0 w-full  bg-black transition-all duration-700 right-0 h-full z-50  overflow-hidden",
          isOpen ? "h-80" : "h-0"
        )}
      >
        <div onClick={handleTriggerSidebar}>
          <CgClose size={40} className="m-5" />
        </div>
        <div className="flex justify-center">
          <div
            className="bg-slate-800/50 flex flex-col gap-5 w-[22pc] p-2 rounded-xl"
            onClick={handleTriggerSidebar}
          >
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
