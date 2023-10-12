import React from "react";
import TourCard from "../components/TourCard";

const Tour = () => {
  return (
    <div className="bg-[#4A3833] px-10 py-10 md:px-0">
      <div className="container mx-auto">
        <div className="my-16 text-center text-white">
          <p className="  mx-auto my-5 h-1 w-16 bg-red-600 "></p>
          <h1 className="text-4xl  ">TAKE A TOUR</h1>
          <p className="my-5 text-[18px]  ">
            At GROVY, we believe in ‘Crafting liveable art in Dubai’ with our
            awe-inspiring projects.
          </p>
        </div>
        <TourCard />
      </div>
    </div>
  );
};

export default Tour;
