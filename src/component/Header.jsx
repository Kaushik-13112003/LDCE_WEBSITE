import React from "react";
import { CarouselFunction } from "./CarouselFunction";

const Header = () => {
  const images = ["entrance.jpg", "e1.jpg", "e2.jpg"];

  return (
    <>
      {" "}
      <div className="flex justify-center items-center mt-5 ">
        <img
          src="ld_logo.png"
          alt="Ld College of Engineering "
          className="sm:w-[50%] w-[80%]"
        />
      </div>
      <CarouselFunction images={images} />
    </>
  );
};

export default Header;
