import React from "react";
import Wrapper from "../Wrapper/index";
import Button from "../../Atoms/button";
import Font from "../../Atoms/Font";
interface RedBannerProps {
  Fheading?: string;
  Sheading?: string;
  Flabel?: string;
  Slabel?: string;
}
const RedBannerSection = ({
  Fheading,
  Sheading,
  Flabel,
  Slabel,
}: RedBannerProps) => {
  return (
    <div>
      <Wrapper className="bg-red-bgColor text-white pb-20">
        <div className=" pt-16 pb-16">
          <p className="lg:text-4xl text-3xl text-center   font-bold ">
            We connect talent to hiring Canadian tech companies
            <p className="break-words">Let’s work together.</p>
          </p>
        </div>
        <div className="grid grid-cols-1 text-center md:grid-cols-[1fr_0.1fr_1fr] ">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">{Fheading}</p>
            <p className="font-bold pt-5 pb-10">{Sheading}</p>
            <Button text="Complete Profile " dark />
          </div>
          <div className="w-hr h-22 bg-white"></div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">{Flabel}</p>
            <Font className="font-bold pt-5 pb-10">{Slabel}</Font>
            <Button text="Book a consultation" dark />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default RedBannerSection;
