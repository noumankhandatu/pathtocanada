import React from "react";
import CountCircle from "../Atoms/countCircle";
type StepperProps = {
  count: number;
  heading?: string;
  paragraph?: string;
};
const Stepper = ({ count, heading, paragraph }: StepperProps) => {
  return (
    <div className=" pt-5 pb-5 w-1/3 text-center">
      <div className="relative">
        <div className="bg-white" style={{ height: "2px" }}></div>
        <CountCircle
          className="absolute -top-6  right-40 center"
          count={count}
        />
      </div>
      <p className="pt-10 pb-5 text-xl font-bold">{heading}</p>
      <p className="font-bold">{paragraph}</p>
    </div>
  );
};

export default Stepper;
