import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  bgColor?: string;
};

const Wrapper = ({ children, bgColor }: WrapperProps) => {
  return (
    <div
      className={`pl-10 pr-10 sm:pl-20 sm:pr-20  md:pl-30 md:pr-30    lg:pl-52 lg:pr-52  ${bgColor}`}
    >
      <p>{children}</p>
    </div>
  );
};

export default Wrapper;
