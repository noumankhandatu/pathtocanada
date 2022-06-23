import React from "react";
import Font from "./Font";

const Avatar = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center">
      <img
        className="rounded-full"
        src="https://path2canada.ca/wp-content/uploads/2022/05/p2c_team_jaz.jpg"
        alt=""
      />
      <p className="text-2xl font-semibold pt-4 pb-4 text-aqua-color">Jaz Guram</p>
      <Font>Recruitment Lead</Font>
    </div>
  );
};

export default Avatar;
