import React from 'react'
import Strength from '../components/Strength';

const Strengths = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="text-white text-center my-12">
        <h1 className="text-4xl text-black">OUR STRENGTH</h1>
        <p className="bg-[#DD9933] w-16 h-1 mx-auto my-2"></p>
        <p className="my-5 text-[18px] text-black">
          GROVY comprises of skilled professionals that include expert
          architects, designers and contractors.
        </p>
      </div>
      <Strength />
    </div>
  );
}

export default Strengths