import React, { useState, useRef } from "react";
import Font from "../Atoms/Font";
import { IoIosArrowDropdown } from "react-icons/io";

type Accordion = {
  label: string;
  paragraph: string;
};
const Accordion = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className="p-5  bg-accordion-color border  border-gray-300"
      onClick={handleToggle}
    >
      <div className="flex justify-between items-center">
        <Font>Lets play a game</Font>
        <IoIosArrowDropdown className="w-5 h-5 text-gray-300" />
      </div>
      {toggle ? <Font className="pt-6">Cool ... !</Font> : null}
    </div>
  );
};

export default Accordion;
