import React from "react";
import RedLableText from "../Atoms/redLableText";
type EmployeeCard = {
  items: object | any;
};
const EmployeeCard = ({ items }: EmployeeCard) => {
  const { heading, paragraph, link } = items;
  return (
    <div className="bg-white  p-10 ">
      <p className="text-lg font-bold tracking-wider">{heading}</p>
      <p className="tracking-wider pt-5 pb-5 text-base font-medium">
        {paragraph}
      </p>
      <RedLableText text={link} />
    </div>
  );
};

export default EmployeeCard;
