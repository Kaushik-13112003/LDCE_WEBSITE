import React from "react";
import { NavLink } from "react-router-dom";
import Achievements from "./Achievements";
import Companies from "./Companies";

const HeroSection = () => {
  return (
    <>
      <div className="w-[90vw] mx-auto">
        <div className="p-8 flex flex-col gap-5 text-justify">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">
            Welcome To LDCE
          </h1>
          <p className="text-justify">
            L. D. College of Engineering endearingly known as L.D.C.E is
            Ahmedabad’s premier engineering college situated at the city’s heart
            and surrounded by elite organization like PRL, ATIRA, ISRO, IIM and
            CEPT. Starting in 1948 to impart quality higher education in various
            fields of engineering, it has seen unprecedented growth.
          </p>
          <p>
            It is affiliated with Gujarat Technological University &
            administrated by Department of Technical Education, Government of
            Gujarat.
          </p>
        </div>

        <div className="h-[1px] bg-blue-200"></div>

        <div className="p-8 flex flex-col gap-5">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">Vision</h1>
          <p className="text-justify">
            To contribute for sustainable development of nation through
            achieving excellence in technical education and research while
            facilitating transformation of students into responsible citizens
            and competent professionals.
          </p>
        </div>

        <div className="h-[1px] bg-blue-200"></div>

        <div className="p-8 flex flex-col gap-5 text-justify">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">Mission</h1>
          <p>
            - To impart affordable and quality education in order to meet the
            needs of industries and achieve excellence in teaching-learning
            process.
          </p>
          <p>
            - To create a conducive research ambience that drives innovation and
            nurtures research-oriented scholars and outstanding professionals.
          </p>
          <p>
            - To collaborate with other academic & research institutes as well
            as industries in order to strengthen education and multidisciplinary
            research.
          </p>
          <p>
            - To promote equitable and harmonious growth of students,
            academicians, staff, society and industries, thereby becoming a
            center of excellence in technical education.
          </p>
          <p>
            - To practise and encourage high standards of professional ethics,
            transparency and accountability.
          </p>
        </div>

        {/* news */}
        <div className="h-[1px] bg-blue-200"></div>

        <div>
          <div className="p-8 flex flex-col gap-5">
            <h1 className="font-mono font-bold  sm:text-3xl text-2xl">News</h1>
            <div className="flex gap-5">
              <img src="news1.png" alt="news" className="w-[50px] rounded-md" />
              <div className="flex flex-col gap-2">
                <NavLink
                  target="_blank"
                  to="https://ldce.ac.in/upload/pdf/news/2024/notice-for-vacating-hostel-room-UCXGCb.pdf"
                  className={"hover:text-blue-600"}
                >
                  Notice for vacating hostel room{" "}
                </NavLink>
                <p>22 May, 2024</p>
              </div>
            </div>

            <div className="flex gap-5">
              <img src="news1.png" alt="news" className="w-[50px] rounded-md" />
              <div className="flex flex-col gap-2">
                <NavLink
                  target="_blank"
                  to="https://ldce.ac.in/upload/pdf/news/2024/notices-for-students-living-in-hostel-rooms-OBdxKi.pdf"
                  className={"hover:text-blue-600"}
                >
                  Notices for students living in hostel rooms{" "}
                </NavLink>
                <p>22 May, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-blue-200"></div>

        <div className="p-8 flex flex-col gap-5">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">
            Achievements
          </h1>
          <Achievements />
        </div>

        <div className="p-8 flex flex-col gap-5">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">
            Placement Companies
          </h1>
          <Companies />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
