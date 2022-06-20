import React from "react";
import CountCircle from "./countCircle";
const Line = ({ ...items }) => {
  const { countOne, countTwo } = items;
  return (
    <div className="hidden sm:block md:block">
      <div className="bg-red-50 w-1 h-52  flex justify-center  ">
        <CountCircle count={countOne} />
      </div>
      <div className="bg-red-50 w-1 h-96  flex justify-center  ">
        <CountCircle count={countTwo} />
      </div>
    </div>
  );
};

export default Line;
