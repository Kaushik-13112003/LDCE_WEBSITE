import React from "react";

const CollegeClubs = () => {
  const clubsData = [
    {
      title: "Advanature Club",
      description: `
            Advanature Club is an initiative of Invincible, an NGO run by students of different colleges. 
            It aims to inform people about adventures and the needs of young India. 
            Advanature focuses on Environment Awareness, Heritage and Culture Conservation, Nature Education, and Adventure.
            The club organizes nature education and adventure camps, attracting students from various colleges.
            It promotes activities that benefit students in studies and co-curricular activities.
            Advanature is run by youth, for youth, encouraging involvement in activities beneficial across life stages.
          `,
      img: "advanature_club.jpg", // Replace with actual image path
    },
    {
      title: "Coders Club",
      description: `
            Coders Club is a coding and technology-related club at L.D. College of Engineering.
            It aims to teach and enhance coding skills among students.
            The club focuses on applying computer programming concepts to solve real-life problems.
            Coders Club emphasizes new technologies, computer languages, and provides technical and practical knowledge.
            It aims to help students achieve career objectives through innovative learning methods.
          `,
      img: "coders-club.jpg", // Replace with actual image path
    },
    {
      title: "FOSS Programming Club",
      description: `
            FOSS Programming Club aims to strengthen computer science students globally.
            It focuses on Competitive Coding as a sport, keeping the brain alert and active.
            The club fosters an environment that encourages students to take up challenges in the subject.
            FOSS Programming Club aims to stimulate young minds with new ideas and cultivate a culture of innovation and completion.
          `,
      img: "foss-programming-club.jpg", // Replace with actual image path
    },
  ];
  return (
    <>
      {" "}
      <div className=" flex flex-col gap-8">
        {clubsData.map((ele, idx) => {
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
                    className="rounded-md sm:max-w-[200px] max-w-[100%] items-center "
                  />
                </div>
                <div className=" text-justify ">
                  <h1 className="text-2xl font-mon">{ele.title}</h1>
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

export default CollegeClubs;
