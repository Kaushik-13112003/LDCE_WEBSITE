import React from "react";
import DepartmentsComponent from "../component/DepartmentsComponent";

const CE = () => {
  const images = ["../ce1.jpg", "../ce2.jpg"];

  const data1 =
    "Computer engineering is the fastest developing discipline in the world. It integrates several fields of electrical engineering and computer science required to develop computer hardware and software. Computer engineers embed computers in other machines and systems, build networks to transfer data and develop ways to make computers, faster, smaller and more capable. The major technical areas of Computer Engineering are : Cybersecurity, Networking, Database Handling, Artificial Intelligence, Design Automation, Computer software, Embedded Systems.";

  const data2 =
    "Computer Engineers venture into various fields such as web-development, Computer Support Specialist, Computer Systems Analyst ,Computer Systems Designer, Database Administrator, Network Administrator and much more. Future opportunities in this field are beyond boundaries. Computer Engineering Department in L.D.C.E covers a wide spectrum of topics in data communication, computer networking, operating systems, microprocessor programming and applications, parallel processing, compiler design, system programming, software engineering, simulation and modeling, distributed systems, graphics and image processing, various packages and softwares like ORACLE, JAVA, VC++ etc.";

  const facultyData = [
    {
      name: "Dr. Chirag S. Thaker",
      role: "Head of Department",
      img: "../chirag_thaker.jpg",
    },
    {
      name: "Mr. Tushar Raval",
      role: "Associate Professor",
      img: "../tushar_raval.jpg",
    },
    {
      name: "Dr. Rajyalakshmi Jaiswal",
      role: "Assistant Professor",
      img: "../rajyalakshmi_jaiswal.jpg",
    },
    {
      name: "Dr. Hetal Joshiyara",
      role: "Assistant Professor",
      img: "../hetal_joshiyara.jpg",
    },
  ];

  return (
    <>
      {" "}
      <DepartmentsComponent
        images={images}
        dname={"Computer Enginnering"}
        department_logo={"../dce.png"}
        data1={data1}
        data2={data2}
        facultyData={facultyData}
      />
    </>
  );
};

export default CE;
