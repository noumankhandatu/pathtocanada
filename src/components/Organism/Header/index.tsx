import React, { useEffect, useState, useRef } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import HeaderItem from "../../Atoms/headerItem";
const Header = () => {
  const [headerValue, setHeaderValue] = useState<number>(1);
  const headerRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLImageElement>(null!);
  useEffect(() => {
    window.onscroll = () => {
      setHeaderValue(window.pageYOffset);
      console.log(headerValue, "value");
    };
    if (headerValue > 300) {
      headerRef.current.style.height = "55px";
      imageRef.current.style.height = "30px";
      headerRef.current.style.boxShadow = "2px 2px 4px #e4e4e7";
    } else if (headerValue < 300) {
      headerRef.current.style.height = "100px";
      imageRef.current.style.height = "80px";
      headerRef.current.style.boxShadow = "none";
    }
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
        className="fixed ease-in-out bg-white z-10 top-0 left-0 right-0 p-3 pl-10 pr-10 flex items-center justify-between"
      >
        <div>
          <img
            ref={imageRef}
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
