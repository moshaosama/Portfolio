import { IoCodeOutline } from "react-icons/io5";
import CardAbout from "../../Components/CardAbout";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineColorLens } from "react-icons/md";
import HeaderForSection from "../../Components/HeaderForSection";

const About = () => {
  return (
    <>
      <div className="flex justify-center mt-5 text-white" id="About">
        <div className="flex flex-col items-center justify-center gap-20">
          <HeaderForSection
            LeftTitle="About"
            rightTitle="Me"
            Description="I'm a passionate software engineer with 2+ years of hands-on
              experience in MERN and MEAN stacks, seeking a challenging role to
              contribute to innovative web applications, enhance user
              experiences, and grow professionally in a dynamic tech
              environment."
          />

          <div className="grid grid-cols-4 gap-5 max-sm:grid-cols-1 max-xl:grid-cols-2">
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
