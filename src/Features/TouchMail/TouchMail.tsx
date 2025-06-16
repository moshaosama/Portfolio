import HeaderForSection from "../../Components/HeaderForSection";
import { TouchMailData } from "../../Data/TouchData";
import { cn } from "../../lib/cn";
import globalStyle from "../../Styles/global-style.module.css";
import type { TouchMailDataType } from "../../Types/TouchMail";
import FormContact from "../FormContact/FormContact";

const TouchMail = () => {
  const { container } = globalStyle;
  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-center mt-44",
          container
        )}
      >
        <HeaderForSection
          LeftTitle="Get In"
          Description="Let's work together on something amazing"
          rightTitle="Touch"
        />

        <div className="mt-20 flex max-sm:flex-col max-sm:gap-10 justify-between items-start  w-full">
          <div className="flex flex-col gap-10">
            {TouchMailData.map((mail: TouchMailDataType, index: number) => (
              <div className="flex gap-5 items-center" key={index}>
                <div
                  className={`w-14 h-14 rounded-full ${mail.backgroound} flex justify-center items-center`}
                >
                  <i>{mail.Icon}</i>
                </div>
                <div>
                  <h1 className="text-xl font-bold">{mail.name}</h1>
                  <p className="text-lg text-gray-400">{mail.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <FormContact />
          </div>
        </div>
      </div>
    </>
  );
};

export default TouchMail;
