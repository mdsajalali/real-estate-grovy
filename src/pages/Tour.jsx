import React from "react";
import TourCard from "../components/TourCard";

const Tour = () => {
  return (
    <div className="bg-[#4A3833] py-10">
      <div className="container mx-auto">
        <div className="text-white text-center my-16">
          <p className="  bg-red-600 w-16 h-1 mx-auto my-5 "></p>
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
