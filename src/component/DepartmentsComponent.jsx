import React from "react";
import { CarouselFunction } from "./CarouselFunction";

const DepartmentsComponent = ({
  dname,
  images,
  department_logo,
  data1,
  data2,
  facultyData,
}) => {
  return (
    <>
      <div className="flex justify-around sm:flex-row flex-col gap-2 mt-6 items-center">
        <div>
          <img
            src={department_logo}
            alt={dname + "logo"}
            className="w-[100px]"
          />
        </div>
        <h1 className="text-center mt-6 font-mono sm:text-3xl text-2xl">
          {dname}
        </h1>
      </div>
      <CarouselFunction images={images} />

      <div className="w-[90vw] mx-auto">
        <div className="p-8 flex flex-col gap-5 text-justify">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">About</h1>
          <p className="text-justify">{data1}</p>
          <p className="text-justify">{data2}</p>
        </div>{" "}
        <div className="h-[1px] bg-blue-200"></div>
        {/* facultyData */}
        <div className="p-8 flex flex-col gap-5 text-justify">
          <h1 className=" text-center font-mono font-bold  sm:text-3xl text-2xl">
            Faculties
          </h1>

          <div className=" flex items-center  justify-center">
            <div className=" grid sm:grid-cols-2 grid-cols-1">
              {facultyData.map((ele, idx) => {
                return (
                  <div
                    key={idx}
                    className=" shdaow rounded-lg p-4 flex gap-5 sm:flex-row flex-col mt-5  items-center"
                  >
                    <img
                      src={ele.img}
                      alt={ele.name}
                      className="shadow sm:w-[100px] w-[100%] "
                    />

                    <div>
                      <p>{ele.name}</p>
                      <p>{ele.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default DepartmentsComponent;
