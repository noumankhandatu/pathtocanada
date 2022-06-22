import React from "react";
type RedLabelText = {
  text?: string;
};
const RedLableText = ({ text }: RedLabelText) => {
  return (
    <div>
      <p className="text-red-600  hover:text-fuchsia-900 cursor-pointer ease-in duration-300 font-bold text-base">
        {text}
      </p>
    </div>
  );
};

export default RedLableText;
