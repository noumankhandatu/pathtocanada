import React from "react";
type HeaderItemProps = {
  text: string;
};
const HeaderItem = ({ text }: HeaderItemProps) => {
  return (
    <p className="text-1xl cursor-pointer hover:text-red-600 ease-in duration-300 font-bold tracking-wider	">
      {text}
    </p>
  );
};

export default HeaderItem;
