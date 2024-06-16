import React from "react";

const Achievements = () => {
  // Provided data
  const achievements = [
    {
      img: "ac1.jpeg",
      title:
        "LDCE NSS Unit awarded as Best NSS Unit and Prof. C. S. Sanghvi as Best Program Officer of GTU for the year 2021-22.",
      date: "By LDCE / 18 May, 2024",
      description:
        "LDCE NSS Unit awarded as Best NSS Unit and Prof. C. S. Sanghvi as Best Program Officer of GTU for the year 2021-22.",
    },
    {
      img: "ac2.png",

      title:
        "Congratulations to Tanay Gajjar and Prof. A G Momin for securing patent on Design of Split Rivet Press",
      date: "By LDCE / 30 Apr, 2024",
      description:
        "Delighted to announce the official granting of Patent No. 511893 for our groundbreaking invention, the 'Design of Split Rivet Press'! This milestone marks the culmination of our journey. It's a testament to the dedication and expertise of our team, led by Tanay P. Gajjar and Prof. A.G. Momin. With a term of 20 years from the filing",
    },
    {
      img: "ac3.jpeg",

      title:
        "LDCE students shines at the National Level Design Competition-2024",
      date: "By LDCE / 26 Apr, 2024",
      description:
        "LDCE shines at the National Level Design Competition! Under Prof C.D. Patel's guidance, Team 2-B (Gohil Aniket & Gohel Harshal) and Team 3-A (Farzan Khambhatta & Umang Prajapati) clinched the first and second runner-up positions, securing prizes of INR 30,000 and INR 20,000 respectively. Congratulations on their",
    },
  ];

  return (
    <>
      <div className=" flex flex-col gap-8">
        {achievements.map((ele, idx) => {
          return (
            <>
              <div
                key={idx}
                className="shadow p-6  rounded-lg flex sm:flex-row flex-col  justify-between gap-6 "
              >
                <div>
                  <img
                    src={ele.img}
                    alt=""
                    className="rounded-md sm:max-w-[300px] max-w-[100%] items-center "
                  />
                </div>
                <div className=" text-justify ">
                  <h1 className="text-2xl font-mon">{ele.title}</h1>
                  <p>{ele.date}</p>
                  <p>{ele.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Achievements;
