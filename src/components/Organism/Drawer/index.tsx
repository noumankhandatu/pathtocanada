import React, { useEffect, forwardRef } from "react";
import Font from "./../../Atoms/Font";
import HeaderItem from "../../Atoms/headerItem";
import { myArray } from "../Header/index";
type DrawerProps = {
  ref?: any;
};

const Drawer = (props: DrawerProps, ref: any) => {
  return (
    <div
      ref={ref}
      className="bg-white shadow-lg top-10 overflow-hidden ease-in-out duration-1000  h-[310px] absolute w-[280px] right-3  sm:w-[600px] sm:right-3 md:w-[700px] md:right-3 "
    >
      <div className="grid grid-cols-1">
        {myArray.map((items, id) => {
          return (
            <div>
              <div>
                <HeaderItem text={items} id={id} />
              </div>
              <div>
                <hr className="pt-2 pb-2" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default forwardRef(Drawer);
