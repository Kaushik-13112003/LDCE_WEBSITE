import React from "react";

const ContactUs = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7268342790085!2d72.54400907376609!3d23.03379997916594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84eaf57ac615%3A0x5c7498bb96b34c97!2sL.D.%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1718536474592!5m2!1sen!2sin"
        className=" w-screen h-[50vh]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="w-[90vw] mx-auto">
        <div className="p-8 flex flex-col gap-5 text-justify">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">Address</h1>
          <p>Opp Gujarat University, Navrangpura, Ahmedabad - 380015 GJ IN</p>
        </div>

        <div className="h-[1px] bg-blue-200"></div>

        <div className="p-8 flex flex-col gap-5 text-justify">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">
            Working Hours
          </h1>

          <p>Monday-Friday: 10:30am to 6:10pm</p>
          <p> Saturday: 10:30am to 6:10pm (Closed on 2nd and 4th) </p>
          <p>Sunday: Closed</p>
        </div>

        <div className="h-[1px] bg-blue-200"></div>

        <div className="p-8 flex flex-col gap-5 text-justify">
          <h1 className="font-mono font-bold  sm:text-3xl text-2xl">
            Contact Details{" "}
          </h1>

          <p>
            Office :{" "}
            <a
              className="text-blue-600 hover:text-blue-400"
              href="mailto:adminofficer@ldce.ac.in"
              target="_blank"
            >
              adminofficer@ldce.ac.in
            </a>
          </p>
          <p>
            Admission :{" "}
            <a
              className="text-blue-600 hover:text-blue-400"
              href="mailto:admission_info@ldce.ac.in"
              target="_blank"
            >
              admission_info@ldce.ac.in{" "}
            </a>
          </p>

          <p>
            Student Section :{" "}
            <a
              className="text-blue-600 hover:text-blue-400"
              href="mailto:student_section@ldce.ac.in"
              target="_blank"
            >
              student_section@ldce.ac.in
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
