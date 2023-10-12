import React from "react";
import Strength from "../components/Strength";

const Strengths = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="my-12 text-center text-white">
        <h1 className="text-4xl text-black">OUR STRENGTH</h1>
        <p className="mx-auto my-2 h-1 w-16 bg-[#DD9933]"></p>
        <p className="my-5 text-[18px] text-black">
          GROVY comprises of skilled professionals that include expert
          architects, designers and contractors.
        </p>
      </div>
      <Strength />
    </div>
  );
};

export default Strengths;
