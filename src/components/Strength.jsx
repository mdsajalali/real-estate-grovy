import React from "react";
import strength1 from "../assets/images/strength-1.png";
import strength2 from "../assets/images/strength-2.png";
import strength3 from "../assets/images/strength-3.png";
import strength4 from "../assets/images/strength-4.png";

const Strength = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 md:mx-0">
      <div className="flex gap-5 items-center justify-center">
        <div>
          <img className="w-[110px] md:w-20 " src={strength1} alt="" />
        </div>
        <div>
          <p>
            More than 35 successful years of experience in the real estate
            industry
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <div>
          <img className="w-40 md:w-48" src={strength2} alt="" />
        </div>
        <div>
          <p>
            Dubai partners, investors & consumers who rely on our services and
            keeps us as the first priority
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <div>
          <img className="w-32 md:w-40" src={strength3} alt="" />
        </div>
        <div>
          <p>
            Comprehensive understanding of the Dubai real estate market
            Collaboration
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <div>
          <img className="w-[180px] md:w-50" src={strength4} alt="" />
        </div>
        <div>
          <p>
            Collaboration with industry experts, which lets us have a good
            knowledge of the industry updates and requirements
          </p>
        </div>
      </div>
    </div>
  );
};

export default Strength;
