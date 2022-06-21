import React from "react";
import { Link } from "react-router-dom";
type HeaderItemProps = {
  text: string;
  id: number;
};
const HeaderItem = ({ text, id }: HeaderItemProps) => {
  let teleport: string = "";
  if (id === 0) teleport = "employee";
  if (id === 1) teleport = "employer";
  return (
    <Link
      to={`/${teleport}`}
      className="text-1xl cursor-pointer hover:text-red-600 ease-in duration-300 font-bold tracking-wider	"
    >
      {text}
    </Link>
  );
};

export default HeaderItem;
