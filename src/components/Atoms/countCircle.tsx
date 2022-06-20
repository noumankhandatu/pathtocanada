import React from "react";
type CountCircleProps = {
  count: any;
};

const CountCircle = ({ count }: CountCircleProps) => {
  return (
    <div className="p-4 h-12 w-12 text-center rounded-full flex items-center absolute mt-40 bg-red-600 text-white text-2xl ">
      {count}
    </div>
  );
};

export default CountCircle;
