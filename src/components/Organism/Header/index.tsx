import React, { useEffect, useState, useRef } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import HeaderItem from "../../Atoms/headerItem";
import { Link } from "react-router-dom";
import ScrollTopButton from "../../Molecules/scrollTopButton";
import Drawer from "../Drawer/index";

export const myArray: string[] = [
  "EMPLOYEE ",
  "EMPLOYERS",
  "JOBS",
  "FAQS ",
  "BLOG",
  "ABOUT US",
];
const Header = () => {
  const iconRef = useRef<HTMLDivElement>(null!);
  const drawerRef = useRef<HTMLDivElement>(null!);
  const [headerValue, setHeaderValue] = useState<number>(1);
  const headerRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLImageElement>(null!);
  useEffect(() => {
    drawerRef.current.style.height = "0px";
  }, []);
  useEffect(() => {
    window.onscroll = () => {
      setHeaderValue(window.pageYOffset);
    };
    if (headerValue > 100) {
      headerRef.current.style.height = "55px";
      imageRef.current.style.height = "40px";
      headerRef.current.style.boxShadow = "2px 2px 4px #e4e4e7";
    } else if (headerValue < 100) {
      headerRef.current.style.height = "100px";
      imageRef.current.style.height = "80px";
      headerRef.current.style.boxShadow = "none";
    }
    if (iconRef.current)
      if (headerValue >= 1000) iconRef.current.style.display = "block";
      else if (headerValue <= 1000) iconRef.current.style.display = "none";
  });
  const handleDrawer = () => {
    if (drawerRef.current.style.height === "0px") {
      drawerRef.current.style.height = "310px";
      drawerRef.current.style.padding = "32px";
    } else if ((drawerRef.current.style.height = "310px")) {
      drawerRef.current.style.height = "0px";
      drawerRef.current.style.padding = "0px";
    }
  };
  return (
    <div>
      <div ref={iconRef}>
        <ScrollTopButton />
      </div>
      <div
        ref={headerRef}
        className="fixed ease-in-out duration-1000 bg-white z-10 top-0 left-0 right-0 p-3 pl-10 pr-10 flex items-center justify-between"
      >
        <Link to="/">
          <img
            className="ease-in-out duration-1000"
            ref={imageRef}
            src="https://path2canada.ca/wp-content/uploads/2022/05/pathToCanada_logo.svg"
          />
        </Link>
        <div className="md:hidden gap-1 sm:hidden lg:flex space-x-4 hidden ">
          {myArray.map((items, id) => {
            return <HeaderItem text={items} id={id} />;
          })}
        </div>
        <div className="block sm:block md:block lg:hidden relative">
          <MenuIcon className="w-8 h-8" onClick={handleDrawer} />
          <Drawer ref={drawerRef} />
        </div>
      </div>
    </div>
  );
};

export default Header;
