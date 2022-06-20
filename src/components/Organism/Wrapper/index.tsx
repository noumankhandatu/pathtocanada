import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  bgColor?: string;
};

const Wrapper = ({ children, bgColor }: WrapperProps) => {
  return (
    <div
      className={`pl-10 pr-10 sm:pl-30 sm:pr-30  md:pl-52 md:pr-52  ${bgColor}`}
    >
      <p>{children}</p>
    </div>
  );
};

export default Wrapper;
