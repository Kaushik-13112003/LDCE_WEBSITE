import React from "react";
import DepartmentsComponent from "../component/DepartmentsComponent";

const ME = () => {
  const images = ["../me1.jpg", "../me2.jpg", "../me3.jpg"];

  const data1 =
    "Mechanical Engineering encompasses areas such as energy, fluid mechanics, dynamics, combustion, vibration, design, manufacturing processes, systems modeling and simulation, mechatronics, robotics, mechanics of material, rapid prototyping and composites. It deals with all aspects of the conversion of thermal energy into useful work and the machines that make this possible. Mechanical engineering is also referred to as the ‘mother’ of all engineering branches.";

  const data2 =
    "An appealing feature of mechanical engineering is that the application base of this field of study is extremely broad and diverse. If you are intrigued by how things work, fascinated by robots and automobile engines, then mechanical engineering is the profession for you. Mechanical Engineering Department in L.D.C.E covers a vast number of areas including Thermodynamics, Manufacturing processes, Fluid mechanics, Solid mechanics, Heat transfer, Machine design, Industrial Engineering, Production Technology, Control Engineering etc. B.E. (Mechanical) program offered by the department is accredited by National Board of Accreditation(NBA) for three years till Jun-2022,Further Accredited for Academic Year 2022-23, 2023-24 and 2024-25 i.e., upto 30/06/2025.";

  const facultyData = [
    {
      name: "Dr. V.B. Patel",
      role: "Head of Department",
      img: "../vb_patel.jpg",
    },
    {
      name: "Dr. Komal Dave",
      role: "Professor",
      img: "../komal_dave.jpg",
    },
    {
      name: "Dr. Ragesh Kapadia",
      role: "Professor",
      img: "../ragesh_kapadia.jpg",
    },
    {
      name: "Dr. Nisha Bora",
      role: "Associate Professor",
      img: "../nisha_bora.jpg",
    },
  ];

  return (
    <>
      {" "}
      <DepartmentsComponent
        images={images}
        dname={"Mechanical Enginnering"}
        department_logo={"../dme.png"}
        data1={data1}
        data2={data2}
        facultyData={facultyData}
      />
    </>
  );
};

export default ME;
