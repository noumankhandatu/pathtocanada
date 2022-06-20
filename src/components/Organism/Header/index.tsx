import React from "react";
import HeaderItem from "../../Atoms/headerItem";
const Header = () => {
  const myArray: string[] = ["EMPLOYEE ", "JOBS", "FAQS ", "BLOG", "ABOUT US"];
  return (
    <div>
      <div className="fixed bg-white  z-10 top-0 left-0 right-0 p-3 pl-10 pr-10 flex items-center justify-between shadow-md">
        <div>
          <img
            className="w-24"
            src="https://path2canada.ca/wp-content/uploads/2022/05/pathToCanada_logo.svg"
          />
        </div>
        <div className="flex space-x-4">
          {myArray.map((items) => {
            return <HeaderItem text={items} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
