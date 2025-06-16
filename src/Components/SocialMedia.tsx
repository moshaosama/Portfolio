import { CgMail } from "react-icons/cg";
import { FiLinkedin } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

const SocialMedia = () => {
  return (
    <>
      <div className="flex items-center gap-10">
        <VscGithubAlt
          size={30}
          cursor={"pointer"}
          className="hover:scale-105 hover:text-blue-400 transition-all duration-300"
        />
        <FiLinkedin
          size={30}
          cursor={"pointer"}
          className="hover:scale-105 hover:text-blue-400 transition-all duration-300"
        />
        <CgMail
          size={30}
          cursor={"pointer"}
          className="hover:scale-105 hover:text-blue-400 transition-all duration-300"
        />
      </div>
    </>
  );
};

export default SocialMedia;
