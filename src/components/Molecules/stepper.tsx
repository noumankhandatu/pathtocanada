import React from "react";
import CountCircle from "../Atoms/countCircle";
import Font from "../Atoms/Font";
type StepperProps = {
  count: number;
  heading?: string;
  paragraph?: string;
};
const Stepper = ({ count, heading, paragraph }: StepperProps) => {
  return (
    <div className=" pt-5 pb-5 w-1/3 text-center">
      <div className="relative">
        <div
          className="bg-white"
          style={{ height: "2px", width: "100%" }}
        ></div>
        <CountCircle
          className="absolute -top-6 lg:right-40 md:right-24 right-7   "
          count={count}
        />
      </div>
      <Font className="pt-10 pb-5 text-xl font-bold">{heading}</Font>
      <Font className="font-bold">{paragraph}</Font>
    </div>
  );
};

export default Stepper;
