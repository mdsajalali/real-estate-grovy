import React from "react";
import TourCard from "../components/TourCard";

const Tour = () => {
  return (
    <div className="container mx-auto">
      <div className="text-white text-center my-16">
        <p className="border-t-4 border-indigo-500 w-16 h-2 mx-auto my-2"></p>
        <h1 className="text-4xl">TAKE A TOUR</h1>
        <p className="my-5 text-[18px]">
          At GROVY, we believe in ‘Crafting liveable art in Dubai’ with our
          awe-inspiring projects.
        </p>
      </div>
      <TourCard />
    </div>
  );
};

export default Tour;
