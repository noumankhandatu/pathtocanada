import React, { useState, useRef, useEffect } from "react";
import Font from "../Atoms/Font";
import { IoIosArrowDropdown } from "react-icons/io";

type AccordionProps = {
  items: object | any;
};
const Accordion = ({ items }: AccordionProps) => {
  const { label, paragraph } = items;
  const ref = useRef<HTMLDivElement>(null!);
  const toggle = useRef<HTMLDivElement>(null!);
  const handleToggle = () => {
    const grey = "#F4F4F4";
    const white = "white";
    if (ref.current && ref.current.style.background != white) {
      ref.current.style.background = white;
      toggle.current.style.display = "block";
    } else if (ref.current && ref.current.style.background === "white") {
      ref.current.style.background = grey;
      toggle.current.style.display = "none";
    }
  };
  useEffect(() => {
    toggle.current.style.display = "none";
  }, []);
  return (
    <div
      ref={ref}
      className="p-5  bg-accordion-color border ease-in-out duration-1000 cursor-pointer  border-gray-300"
      onClick={handleToggle}
    >
      <div className="flex justify-between items-center ">
        <Font>{label}</Font>
        <IoIosArrowDropdown className="w-5 h-5  text-gray-300" />
      </div>
      <div ref={toggle} className="ease-in-out duration-1000 ">
        <Font className="pt-6 ">{paragraph}</Font>
      </div>
    </div>
  );
};

export default Accordion;
