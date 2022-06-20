import React from "react";
import { MenuIcon } from "@heroicons/react/solid";
import HeaderItem from "../../Atoms/headerItem";
const Header = () => {
  const myArray: string[] = [
    "EMPLOYEE ",
    "EMPLOYERS",
    "JOBS",
    "FAQS ",
    "BLOG",
    "ABOUT US",
  ];
  return (
    <div>
      <div className="fixed bg-white  z-10 top-0 left-0 right-0 p-3 pl-10 pr-10 flex items-center justify-between shadow-md">
        <div>
          <img
            className="w-24 "
            src="https://path2canada.ca/wp-content/uploads/2022/05/pathToCanada_logo.svg"
          />
        </div>
        <div className="md:flex gap-4 sm:flex lg:flex space-x-4 hidden ">
          {myArray.map((items) => {
            return <HeaderItem text={items} />;
          })}
        </div>
        <div className="block sm:hidden md:hidden lg:hidden">
          <MenuIcon
            onClick={() => {
              alert("Loading");
            }}
            className="w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
