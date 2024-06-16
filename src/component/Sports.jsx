import React from "react";

const Sports = () => {
  const sportsData = [
    {
      name: "Cricket",
      description:
        "Cricket is more than just a sport at L.D. College of Engineering (LDCE); it's a passion ingrained in the culture. The institute's cricket team has consistently dominated inter-college sports meets, earning a reputation as a formidable force. Alongside annual tournaments like the inter-year and LD Cup, which nurture new talent, LDCE's cricket program continues to produce players of national caliber.",
      image: "cricket.png", // Replace with actual image file path
    },
    {
      name: "Football",
      description:
        "Football has experienced a resurgence in popularity at LDCE, aligning with the sport's growing prominence in India. The college boasts a well-maintained football field where aspiring Ronaldinhos and Ronaldos hone their skills under experienced coaches' guidance. This resurgence has seen LDCE emerge as a hub for football enthusiasts and budding athletes alike.",
      image: "football.png", // Replace with actual image file path
    },
    {
      name: "Tennis",
      description:
        "LDCE is at the forefront of promoting lawn tennis, recognizing its progressive impact on sports. The institute features two state-of-the-art concrete courts that host both practice sessions and competitive matches. LDCE's tennis team has garnered acclaim in recent years, securing numerous medals and trophies in fiercely contested inter-college competitions.",
      image: "tennis.png", // Replace with actual image file path
    },
    {
      name: "Badminton",
      description:
        "LDCE boasts a well-equipped indoor badminton hall in addition to courts available in the hostels. The brightly lit hostel courts are popular among students who frequently engage in late-night badminton matches. The college's badminton team consistently shines in inter-college sports meets, supported by top-notch facilities and resources provided by LDCE.",
      image: "badminton.png", // Replace with actual image file path
    },
    {
      name: "Table Tennis",
      description:
        "LDCE offers extensive table tennis facilities, including indoor halls dedicated to practice sessions for the institute's team. In addition to these facilities, students across undergraduate programs and hostels have access to table tennis tables, fostering a vibrant table tennis culture at LDCE.",
      image: "table_tennis.png", // Replace with actual image file path
    },
  ];

  return (
    <>
      {" "}
      <div className="w-[90vw] mx-auto mb-10">
        <div className="p-8 flex flex-col gap-5 text-justify">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">Sports</h1>
        </div>

        <div className=" flex flex-col gap-8">
          {sportsData.map((ele, idx) => {
            return (
              <>
                <div
                  key={idx}
                  className="shadow p-6  rounded-lg flex sm:flex-row flex-col  justify-between gap-6 "
                >
                  <div>
                    <img
                      src={ele.image}
                      alt=""
                      className="rounded-md sm:max-w-[200px] max-w-[100%] items-center "
                    />
                  </div>
                  <div className=" text-justify ">
                    <h1 className="text-2xl font-mon">{ele.name}</h1>
                    <p>{ele.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sports;
