import React, { useEffect } from "react";
import Font from "./Font";
import RedLableText from "./redLableText";
import { fetchUserById } from "../../Redux/blogSlicer/index";
import Blog from "../../Pages/blog/index";

const BlogCard = ({ items }: object | any) => {
  const { image, title, price, description } = items;
  return (
    <div className="shadow-lg text-center flex flex-col justify-center items-center cursor-pointer">
      <img className={"w-[200px] h-[200px]"} src={image} alt="" />
      <p className="text-xl text-aqua-color font-bold pb-2 pt-2">{title}</p>
      <small>{price} </small>
      {/* <Font className="pt-2 pb-2">{description}</Font> */}
      <RedLableText text="READ MORE" />
    </div>
  );
};

export default BlogCard;
