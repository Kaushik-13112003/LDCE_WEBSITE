import React from "react";
import DepartmentsComponent from "../component/DepartmentsComponent";

const IT = () => {
  const images = ["../it.jpg", "../it2.jpg", "../it3.jpg"];

  const data1 =
    "Vision : To shape the young minds of aspiring Information Technology engineers to become the front runner in the sustainable technological growth of our country, conserving its rich cultural heritage and catering to its socioeconomic needs.";

  const data2 =
    "Mission 1. Bringing innovative approach in teaching-learning process to produce competent Information Technology engineers. 2. Provide opportunities and necessary exposure to the young engineers to develop themselves into responsible professionals. 3. Infusing lifelong learning ability in the aspiring minds with the view of making them sensible towards their social responsibilities.";

  const facultyData = [
    {
      name: "Dr. Hiteishi Diwanji",
      role: "Head of Department",
      img: "../hod_mam.jpg",
    },
    {
      name: "Mehul Parikh",
      role: "Associate Professor",
      img: "../mehul_sir.jpg",
    },
    {
      name: "BAKULBHAI PANCHAL",
      role: "Assistant Professor",
      img: "../bakul_sir.jpg",
    },
    {
      name: "Nirjari Desai",
      role: "Assistant Professor",
      img: "../nirjari_mam.jpg",
    },
  ];

  return (
    <>
      <DepartmentsComponent
        images={images}
        dname={"Information & Technology"}
        department_logo={"../dit.png"}
        data1={data1}
        data2={data2}
        facultyData={facultyData}
      />
    </>
  );
};

export default IT;
