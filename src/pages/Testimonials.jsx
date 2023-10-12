import React from "react";
import test1 from "../assets/images/test-1.jpg";
import test2 from "../assets/images/test-2.jpg";
import test3 from "../assets/images/test-3.jpg";

const Testimonials = () => {
  return (
    <div className="bg-[#EAEAEA]">
      <div className="container mx-auto my-20">
        <div className="mx-2 flex flex-wrap items-center justify-center gap-10">
          <div className="my-12  text-white">
            <h1 className="text-4xl text-black">TESTIMONIALS</h1>
            <p className="my-5 h-1 w-16  bg-[#DD9933]"></p>
            <p className="my-5 text-[18px] text-black">
              We appreciate our client reviews & feedback, <br /> have a look at
              what our customers say <br /> about "GROVY"
            </p>
            <button className="btn btn-neutral">VIEW ALL</button>
          </div>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-10">
            <img
              className="h-48 w-80 rounded-lg object-cover"
              src={test1}
              alt=""
            />
            <img
              className="h-48 w-80 rounded-lg object-cover"
              src={test2}
              alt=""
            />
            <img
              className="h-48 w-80 rounded-lg object-cover"
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
