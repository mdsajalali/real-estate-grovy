import React from "react";
import Grovy from "../assets/images/grovy.jpg";

const About = () => {
  return (
    <div className="hero min-h-[70vh] bg-[#D9CEC0] px-10 md:px-0">
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <div className="flex-1">
          <h1 className="mb-5 text-3xl text-black">CORPORATE VIDEO</h1>
          <img src={Grovy} />
        </div>
        <div className="flex-1 text-black">
          <h1 className="text-5xl font-bold">ABOUT US</h1>
          <div class=" mt-5 w-14 border-t-4 border-white "></div>
          <p className="py-6">
            <p>Grovy - Real Estate Developers in Dubai</p>
            <p className="my-5">
              GROVY Real Estate Developers LLC prides itself on its
              uncompromising commitment of serving excellent real estate
              projects that exemplify perfection.
            </p>
            <p>
              At GROVY, we believe in ‘Crafting liveable art in Dubai’ with our
              awe-inspiring projects. Being one of the luxury developers in the
              Middle East, we thrive to create grand real estate projects that
              define class, elegance and opulence.
            </p>
          </p>
          <button className="btn btn-neutral">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
