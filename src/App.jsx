import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Events from "./component/Events";
import Admission from "./component/Admission";
import Academics from "./component/Academics";
import Departments from "./component/Departments";
import IT from "./Department/IT";
import CE from "./Department/CE";
import ME from "./Department/ME";
import EE from "./Department/EE";
import ScrollToTop from "react-scroll-to-top";
import ContactUs from "./component/ContactUs";
import Campus from "./component/Campus";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { GiSoccerBall } from "react-icons/gi";
import Sports from "./component/Sports";

const App = () => {
  return (
    <>
      <Navbar />
      <NavLink
        target="_blank"
        to="https://www.ldcealumni.net/"
        title="connect to alumni"
        className={
          "bg-blue-100 hover:bg-blue-200 p-3 fixed  right-0 top-[20vh] z-20 "
        }
      >
        <MdGroup size={30} />
        <span>Alumni</span>
      </NavLink>

      <NavLink
        to="/sports"
        title="connect to alumni"
        className={
          "bg-blue-100 hover:bg-blue-200 p-3 fixed  left-0 top-[20vh] z-20 "
        }
      >
        <GiSoccerBall size={30} />
      </NavLink>

      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/sports" element={<Sports />}></Route>
        <Route path="/campus" element={<Campus />}></Route>
        <Route path="/campus" element={<Campus />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/academics" element={<Academics />}></Route>
        <Route path="/departments" element={<Departments />}></Route>
        <Route path="/departments/IT" element={<IT />}></Route>
        <Route path="/departments/CE" element={<CE />}></Route>
        <Route path="/departments/ME" element={<ME />}></Route>
        <Route path="/departments/EE" element={<EE />}></Route>
      </Routes>

      <footer className="flex justify-around p-2 bg-blue-100  items-center">
        <div>{new Date().getFullYear() + " © LDCE. All rights Reserved"}</div>
        <div className="flex gap-3 flex-wrap">
          <NavLink
            target="_blank"
            to={"https://www.instagram.com/ldceofficial"}
          >
            <IoLogoInstagram size={30} className=" hover:text-blue-700" />
          </NavLink>
          <NavLink
            target="_blank"
            to={
              "https://in.linkedin.com/school/l.d-college-of-engineering---ahmedabad"
            }
          >
            <IoLogoLinkedin size={30} className=" hover:text-blue-700" />
          </NavLink>
        </div>
      </footer>

      <ScrollToTop
        smooth
        className="flex items-center justify-center"
        // color="white"
        style={{
          borderRadius: "100px",
          backgroundColor: " rgb(283, 214, 214)",
        }}
      />
    </>
  );
};

export default App;
