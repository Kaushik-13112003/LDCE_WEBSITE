import React from "react";
import { CarouselFunction } from "./CarouselFunction";

const Library = () => {
  const images = ["library1.jpg", "library2.jpg", "library3.jpg"];
  return (
    <>
      <div className="-mt-6">
        <CarouselFunction images={images} />
      </div>

      <div className="p-8 flex flex-col gap-5 text-justify">
        <p>
          The Central Library of the renowned institute of the state, L. D.
          College of Engineering, Ahmedabad is the hub for information services
          in the institute, gathering place for the faculties & students of
          diversified technological areas and also serves as a major learning
          and resource centre. It is a creative and innovative partner in
          supporting the teaching, learning, scholarship and research activities
          of the institute. With the fast growing collection, both in digital
          and print forms using the state-of-the-art facilities, the Central
          library of the institute is contributing exponentially to provide a
          world class academic environment with the institute.
        </p>
        <p>
          It is located in a separate building having beautiful landscape of
          lush green plants within the campus which gives a pleasant ambience to
          the readers. Well-furnished and illuminated location creates an
          atmosphere of serenity that motivates the readers to have effective
          learning and research activities.It has a spacious area of 2845.85 Sq.
          meter that exudes peaceful learning environment.
        </p>
        <p>
          The collection in the library encompasses 90520 books of 33726 titles
          varying in subjects like Engineering, Management, Architecture &
          Design, Basic Science & Humanities and also includes reference books,
          number of CDs/DVDs and subscribed to 53 print journals and magazines
          in print and 1326 e-books and other e-resources. Major e-resources
          such as IEEE Journals, Science Direct, IEEE Proceedings, ASME, ASCE
          and Springer which are accessible to the faculties and students
          community from anywhere in the campus.The Library was given best
          knowledge centre (Library) award of the state (1st Rank) for the year
          2018 by Indian Society for Technical Education (ISTE).
        </p>
      </div>
    </>
  );
};

export default Library;
