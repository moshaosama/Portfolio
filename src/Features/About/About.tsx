import { IoCodeOutline } from "react-icons/io5";
import CardAbout from "../../Components/CardAbout";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineColorLens } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="flex justify-center mt-5 text-white">
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-5xl font-bold">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="w-[50pc] text-xl text-center">
              I'm a passionate software engineer with 2+ years of hands-on
              experience in MERN and MEAN stacks, seeking a challenging role to
              contribute to innovative web applications, enhance user
              experiences, and grow professionally in a dynamic tech
              environment.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5">
            <CardAbout
              Description="Writing maintainable, scalable, and efficient code"
              Icon={<IoCodeOutline />}
              Title="Clean Code"
            />
            <CardAbout
              Description="Bringing ideas to life with beautiful user interfaces"
              Icon={<MdOutlineColorLens />}
              Title="Creative Design"
            />
            <CardAbout
              Description="Optimizing for speed and user experience"
              Icon={<BsLightningCharge />}
              Title="Performance"
            />
            <CardAbout
              Description="Love for creating meaningful digital experiences"
              Icon={<IoMdHeartEmpty />}
              Title="Passion"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
