import React from "react";
import aura from "../assets/images/aura.png";
import aria from "../assets/images/aria.png";
import alcove from "../assets/images/alcove.png";
import project01 from "../assets/images/project01.jpg";
import project02 from "../assets/images/project-2.jpg";
import project03 from "../assets/images/project-3.jpg";

const ProjectCard = () => {
  return (
    <div className="flex gap-5 items-center justify-between flex-wrap">
      <div>
        <div className="flex items-center  gap-5 my-5">
          <div className="w-16 ">
            <img src={aura} alt="" />
          </div>
          <div>
            <h1>Aura</h1>
            <h2>Welcome Home</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="w-full h-[200px]">
            <img src={project01} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="text-[14px]">
              Arriving at your home in Aura is an experience equal to entering
              the most exclusive hotels. Open-plan living spaces lets you create
              a space that best suits your furnishing needs. Spacious Bedrooms
              are thoughtfully planned to create a beautiful haven for rest and
              relaxation.  
            </p>
            <div className="card-actions">
          <button className="btn btn-neutral">Read More</button>
              
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center  gap-5 my-5">
          <div className="w-20 ">
            <img src={aria} alt="" />
          </div>
          <div>
            <h1>Aria</h1>
            <h2>A Wonderfully Designed Apartment</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="w-full h-[200px]">
            <img src={project02} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="text-[14px]">
              Aria, is a fine example of a mesmerizing melody that is poised to
              capture any heart. This beautifully planned residential apartments
              have 125 elegantly appointed Studio, One and Two bedroom homes
              that offer contemporary lifestyle blended with state-of-the-art
              amenities and features.
            </p>
            <div className="card-actions">
          <button className="btn btn-neutral">Read More</button>
              
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center  gap-5 my-5">
          <div className="w-20 ">
            <img src={alcove} alt="" />
          </div>
          <div>
            <h1>Alcove</h1>
            <h2>
              A name that defines luxury, <br /> opulence and eminence.
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="w-full h-[200px] ">
            <img
              src={project03}
              alt="Shoes"
              className="rounded-r-lg rounded-l-lg"
            />
          </figure>
          <div className="card-body">
            <p className="text-[14px]">
              A range of luxury apartments, this project by Grovy is planned to
              cater to all who aspire for luxury living in the wonderful city of
              Dubai. From ample space to world-class amenities, from leisure
              facilities to perfect connectivity, this project is perfect for
              someone who desires to pamper themselves with a luxury living.
            </p>
            <div className="card-actions">
          <button className="btn btn-neutral">Read More</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
