import React from "react";

import Brand from "./brand/index";
import Location from "./location/index";
import Menu from "./menu/index";

export const Home = () => {
  return (
    <div className="flex flex-row w-full bg-gray-100">
      <div className="w-1/5">
        <Menu />
      </div>
      <div className="bg-gray-100 w-4/5">
        <Brand />
        <Location />
      </div>
    </div>
  );
};
export default Home;
