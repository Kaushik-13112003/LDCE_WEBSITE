import React from "react";
import DepartmentsComponent from "../component/DepartmentsComponent";

const EE = () => {
  const images = ["../ee2.jpg", "../ee3.jpg"];

  const data1 =
    "Electrical engineering deals with the study and application of electricity, electronics and electromagnetism. It is further subdivided into a wide range of sub fields including electronics, digital computers, power engineering, control systems, signal processing, instrumentation and control, power system protection, digital electronics etc.";

  const data2 =
    "Electrical engineers can work in atomic power plants, hydro or thermal power plants. Job opportunities are ample in both private as well as public sector like railways, civil aviation, electricity board and utility companies, electrical design and consultancy firms and all types of manufacturing industries. Electrical Engineering Department at L.D.C.E covers a wide spectrum of topics in elements of Electrical & Electronic engineering, networks, integrated electronics, measurements and instruments, power electronics, energy conservation & utilization, microprocessors, electrical machine and power system design.";

  const facultyData = [
    {
      name: "Dr. Ketan Badgujar",
      role: "Head of Department",
      img: "../ketan_badgujar.jpg",
    },
    {
      name: "Dr. Mahipalsinh Chudasama",
      role: "Professor",
      img: "../mahipalsinh_chudasama.jpg",
    },
    {
      name: "Dr. Jyoti Iyer",
      role: "Professor",
      img: "../jyoti_iyer.jpg",
    },
    {
      name: "Mr. Maheshwari Dharmesh",
      role: "Professor",
      img: "../maheshwari_dharmesh.jpg",
    },
  ];
  return (
    <>
      {" "}
      <DepartmentsComponent
        images={images}
        dname={"Electrical Enginnering"}
        department_logo={"../dee.png"}
        data1={data1}
        data2={data2}
        facultyData={facultyData}
      />
    </>
  );
};

export default EE;
