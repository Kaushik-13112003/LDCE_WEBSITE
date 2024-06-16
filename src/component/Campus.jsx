import React from "react";
import CollegeClubs from "./CollegeClubs";
import Library from "./Library";

const Campus = () => {
  return (
    <>
      <div className="w-[90vw] mx-auto">
        <div className="p-8 flex flex-col gap-5 text-justify">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">
            Campus Map
          </h1>

          <img src="map.png" alt="campus map" />
        </div>

        {/* clubs */}
        <div className="p-8 flex flex-col gap-5 text-justify">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">
            Campus Clubs
          </h1>
          <div className="h-[1px] bg-blue-200"></div>

          <CollegeClubs />
        </div>

        {/* library */}
        <div className="p-8 flex flex-col gap-5 text-justify">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">
            Campus Library
          </h1>
          <div className="h-[1px] bg-blue-200"></div>
        </div>
      </div>
      <Library />
    </>
  );
};

export default Campus;
