import React from "react";
import Line from "../Atoms/line";

const RoadMapCards = ({ ...items }) => {
  const { firstImg, secondImg } = items;
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.1fr_1fr] gap-10">
      <div>
        <img
          style={{ width: "350px ", height: "250px" }}
          src={firstImg}
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
          asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Provident, qui?
        </p>
      </div>
      <div>
        <Line {...items} />
      </div>
      <div className="relative ">
        <div className="static md:absolute top-64  ">
          <img
            style={{ width: "350px ", height: "250px" }}
            src={secondImg}
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Provident, qui?
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadMapCards;
