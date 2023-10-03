import React from "react";
import test1 from "../assets/images/test-1.jpg"
import test2 from "../assets/images/test-2.jpg"
import test3 from "../assets/images/test-3.jpg"

const Testimonials = () => {
  return (
    <div className="bg-[#EAEAEA]">
      <div className="container mx-auto my-20">
        <div className="flex flex-wrap items-center justify-center gap-10 ">
          <div className="text-white  my-12">
            <h1 className="text-4xl text-black">TESTIMONIALS</h1>
            <p className="bg-[#DD9933] w-16 h-1  my-5"></p>
            <p className="my-5 text-[18px] text-black">
              We appreciate our client reviews & feedback, <br /> have a look at
              what our customers say <br /> about "GROVY"
            </p>
            <button className="btn btn-neutral">VIEW ALL</button>
          </div>
          <div className="flex gap-10 flex-wrap justify-center items-center mb-10">
            <img
              className="w-80 h-48 object-cover rounded-lg"
              src={test1}
              alt=""
            />
            <img
              className="w-80 h-48 object-cover rounded-lg"
              src={test2}
              alt=""
            />
            <img
              className="w-80 h-48 object-cover rounded-lg"
              src={test3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
