import React from "react";
import tour1 from "../assets/images/tour-1.jpg";
import tour2 from "../assets/images/tour-2.jpg";
import tour3 from "../assets/images/tour-3.jpg";
import tour4 from "../assets/images/tour-4.jpg";

const TourCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={tour1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Aria Show Apartment</h2>
          <p className="border-t-4 border-indigo-500 w-16 h-2"></p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={tour2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Aria Show Apartment</h2>
          <p className="border-t-4 border-indigo-500 w-16 h-2"></p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={tour3} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Aria Show Apartment</h2>
          <p className="border-t-4 border-indigo-500 w-16 h-2"></p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={tour4} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Aria Show Apartment</h2>
          <p className="border-t-4 border-indigo-500 w-16 h-2"></p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
