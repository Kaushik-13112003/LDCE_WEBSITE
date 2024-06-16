// import React, { useState, useEffect } from "react";
// import { Carousel } from "@material-tailwind/react";

// export function CarouselFunction({ images }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change slide every 3 seconds (adjust as needed)

//     return () => clearInterval(intervalId);
//   }, [images.length]);

//   return (
//     <div className="relative h-[300px] w-full mt-7">
//       <Carousel transition={{ duration: 100 }} className="h-full w-full">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`h-full w-screen ${
//               index === currentIndex ? "block" : "hidden"
//             }`}
//           >
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import './App.css'; // Import custom CSS

export function CarouselFunction({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, [images.length]);

  const notify = () => toast("Slide changed!");

  useEffect(() => {
    // notify();
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[300px] w-full mt-7">
      <div className="relative h-full w-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex
                ? "carousel-slide-active"
                : "carousel-slide-hidden"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 z-10"
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 z-10"
        onClick={handleNextClick}
      >
        Next
      </button>

      <ToastContainer />
    </div>
  );
}
