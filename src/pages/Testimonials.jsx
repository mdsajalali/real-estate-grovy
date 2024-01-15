import React from "react";
import { testimonialImg } from "../data";

const Testimonials = () => {
  return (
    <div className="bg-[#EAEAEA]">
      <div className="container mx-auto my-20 py-10">
        <div className="flex flex-wrap items-center justify-center  gap-10">
          <div className="text-center">
            <h1 className="text-4xl text-black">TESTIMONIALS</h1>
            <div className="mx-auto my-5 h-1 w-16 bg-[#DD9933]"></div>
            <p className="text-lg text-black">
              We appreciate our client reviews & feedback,
              <br /> have a look at what our customers say
              <br /> about "GROVY"
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {testimonialImg.map((img, index) => (
              <img
                key={index}
                className="h-48 w-80 transform rounded-lg object-cover transition-transform hover:scale-105"
                src={img}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-neutral mt-6 w-60 transform transition-transform hover:scale-105">
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
