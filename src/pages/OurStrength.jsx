import React from 'react'
import Strength from '../components/Strength';

const OurStrength = () => {
  return (
    <div className="container mx-auto">
      <div className="text-white text-center my-12">
        <h1 className="text-4xl">OUR STRENGTH</h1>
        <p className="border-t-4 border-indigo-500 w-16 h-2 mx-auto my-2"></p>
        <p className="my-5 text-[18px]">
          GROVY comprises of skilled professionals that include expert
          architects, designers and contractors.
        </p>
      </div>
      <Strength />
    </div>
  );
}

export default OurStrength