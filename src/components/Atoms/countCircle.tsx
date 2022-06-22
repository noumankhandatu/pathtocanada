import React from "react";
type CountCircleProps = {
  count: number | string | any;
  className?: any;
};

const CountCircle = ({ count, className }: CountCircleProps) => {
  return (
    <div
      className={`p-4 h-12 w-12 text-center rounded-full flex items-center  ${className} bg-red-600 text-white text-2xl`}
    >
      {count}
    </div>
  );
};

export default CountCircle;
