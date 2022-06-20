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
    <div
      style={{ height: "100vh" }}
      className="bg-TCard-color  p-10 ml-4 mr-4"
    >
      <div className="pl-10 pr-10">
        <div className="text-center flex justify-center">
          <img src={iconImg} alt="" />
        </div>
        <p className="pt-10 tracking-wider	pb-10	">{text}</p>
        <div className="text-center flex justify-center  ">
          <img src={avatarImg} alt="" className="rounded-full" />
        </div>
        <p className="pt-10 	pb-16	font-bold">-Deepak</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
