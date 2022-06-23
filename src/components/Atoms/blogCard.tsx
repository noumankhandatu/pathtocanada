import React from "react";
import Font from "./Font";
import RedLableText from "./redLableText";

const BlogCard = () => {
  return (
    <div>
      <img src="https://picsum.photos/400/200" alt="" />
      <p className="text-xl text-aqua-color font-bold pb-2 pt-2">
        British Columbia’s Tech Visa Program Promises Speedy Canadian Permanent
        Residence – A Discussion With RCIC Jenny Perez
      </p>
      <small>june 9 </small>
      <Font className="pt-2 pb-2">
        In an effort to boost its economy, Canada is significantly increasing
        its annual immigration targets. So, if you’ve...
      </Font>
      <RedLableText text="READ MORE" />
    </div>
  );
};

export default BlogCard;
