import React from "react";
type TestimonialCardProps = {
  text?: string;
  iconImg?: string | any;
  avatarImg?: string | any;
};
const TestimonialCard = ({
  text,
  iconImg,
  avatarImg,
}: TestimonialCardProps) => {
  return (
    <div className="bg-TCard-color md:h-screen h-fit  md:p-10 p-5 md:ml-4 ml-2 mr-2 md:mr-4">
      <div className="md:pl-10 md:pr-10 pr-3 pl-3">
        <div className="text-center flex justify-center">
          <img src={iconImg} alt="" />
        </div>
        <p className="pt-10 tracking-wider	pb-10	">{text}</p>
        <div className="text-center flex justify-center  ">
          <img src={avatarImg} alt="" className="rounded-full grayscale " />
        </div>
        <p className="pt-10 	pb-16	font-bold">-Deepak</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
