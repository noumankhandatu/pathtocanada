import React, { useEffect, useState, useRef } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import HeaderItem from "../../Atoms/headerItem";
const Header = () => {
  const [headerValue, setHeaderValue] = useState<number>(1);
  const headerRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    window.onscroll = () => {
      setHeaderValue(window.pageYOffset);
      console.log(headerValue, "value");
    };
    if (headerValue > 500) headerRef.current.style.height = "55px";
    else if (headerValue < 500) headerRef.current.style.height = "80px";
  });
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
      <div
        ref={headerRef}
        className="fixed ease-in-out bg-white z-10 top-0 left-0 right-0 p-3 pl-10 pr-10 flex items-center justify-between shadow-md"
      >
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
function refresh() {
  throw new Error("Function not implemented.");
}
