import { CgMail } from "react-icons/cg";
import { FiLinkedin } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

const SocialMedia = () => {
  return (
    <>
      <div className="flex gap-10 items-center">
        <a href={"https://github.com/moshaosama"} target="_blank">
          <VscGithubAlt
            size={30}
            cursor={"pointer"}
            className="transition-all duration-300 hover:scale-105 hover:text-blue-400"
          />
        </a>

        <a href={"https://www.linkedin.com/in/thisfekry/"} target="_blank">
          <FiLinkedin
            size={30}
            cursor={"pointer"}
            className="transition-all duration-300 hover:scale-105 hover:text-blue-400"
          />
        </a>
        <CgMail
          size={30}
          cursor="pointer"
          onClick={() =>
            (window.location.href = "mailto:mohamedOSFekry@gmail.com")
          }
          className="transition-all duration-300 hover:scale-105 hover:text-blue-400"
        />
      </div>
    </>
  );
};

export default SocialMedia;
