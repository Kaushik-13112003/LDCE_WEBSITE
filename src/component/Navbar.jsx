import React, { useCallback, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { LiaUniversitySolid } from "react-icons/lia";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleFunction = useCallback(() => {
    setToggle((value) => !value);
  }, []);

  return (
    <>
      <header className="border flex items-center justify-between bg-blue-200 p-3">
        <div>
          {" "}
          <NavLink
            to={"/"}
            className=" flex gap-2  items-center text-2xl hover:text-blue-800 "
          >
            LDCE
            <LiaUniversitySolid size={30} />
          </NavLink>
        </div>

        <div>
          {!toggle ? (
            <GiHamburgerMenu
              className="sm:hidden d-block"
              onClick={toggleFunction}
            />
          ) : (
            <IoIosCloseCircle
              className="sm:hidden d-block"
              onClick={toggleFunction}
            />
          )}
        </div>

        <div className="hidden sm:flex gap-4 items-center sm:d-block ">
          <NavLink to={"/"} className="hover:text-blue-500  rounded w-full p-2">
            Home
          </NavLink>
          <NavLink to={"/academics"} className="hover:text-blue-500">
            Academics
          </NavLink>
          <NavLink to={"/departments"} className="hover:text-blue-500">
            Departments
          </NavLink>
          <NavLink to={"/campus"} className="hover:text-blue-500">
            Campus
          </NavLink>
          <NavLink to={"/contact"} className="hover:text-blue-500">
            Contact
          </NavLink>
        </div>
      </header>

      {toggle && (
        <>
          <div className="sm:hidden flex flex-col text-blue-1  text-blue-800  bg-blue-300 text-center p-6 hover text:blue-300 gap-6 ">
            <NavLink
              to={"/"}
              onClick={() => setToggle(false)}
              className="hover:text-blue-500 hover:bg-blue-100 rounded w-full p-2"
            >
              Home
            </NavLink>

            <NavLink
              to={"/academics"}
              onClick={() => setToggle(false)}
              className="hover:text-blue-500 hover:bg-blue-100 rounded w-full p-2"
            >
              Academics
            </NavLink>
            <NavLink
              to={"/departments"}
              onClick={() => setToggle(false)}
              className="hover:text-blue-500 hover:bg-blue-100 rounded w-full p-2"
            >
              Departments
            </NavLink>
            <NavLink
              to={"/campus"}
              onClick={() => setToggle(false)}
              className="hover:text-blue-500 hover:bg-blue-100 rounded w-full p-2"
            >
              Campus
            </NavLink>
            <NavLink
              to={"/contact"}
              onClick={() => setToggle(false)}
              className="hover:text-blue-500 hover:bg-blue-100 rounded w-full p-2"
            >
              Contact
            </NavLink>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
