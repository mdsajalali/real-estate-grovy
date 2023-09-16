import React from "react";
import aura from "../assets/images/aura.png";
import project01 from "../assets/images/project01.jpg";

const ProjectCard = () => {
  return (
    <div className="flex gap-5 items-center justify-between flex-wrap">
      <div>
        <div className="flex items-center  gap-5 my-5">
          <div className="w-20 ">
            <img src={aura} alt="" />
          </div>
          <div>
            <h1>Aura</h1>
            <h2>Welcome Home</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={project01} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>
              rriving at your home in Aura is an experience equal to entering
              the most exclusive hotels. Open-plan living spaces lets you create
              a space that best suits your furnishing needs. Spacious Bedrooms
              are thoughtfully planned to create a beautiful haven for rest and
              relaxation. Ensuite and Guest Bathrooms are all fitted and
              finished to the highest standard.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center  gap-5 my-5">
          <div className="w-20 ">
            <img src={aura} alt="" />
          </div>
          <div>
            <h1>Aura</h1>
            <h2>Welcome Home</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={project01} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>
              rriving at your home in Aura is an experience equal to entering
              the most exclusive hotels. Open-plan living spaces lets you create
              a space that best suits your furnishing needs. Spacious Bedrooms
              are thoughtfully planned to create a beautiful haven for rest and
              relaxation. Ensuite and Guest Bathrooms are all fitted and
              finished to the highest standard.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center  gap-5 my-5">
          <div className="w-20 ">
            <img src={aura} alt="" />
          </div>
          <div>
            <h1>Aura</h1>
            <h2>Welcome Home</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={project01} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>
              rriving at your home in Aura is an experience equal to entering
              the most exclusive hotels. Open-plan living spaces lets you create
              a space that best suits your furnishing needs. Spacious Bedrooms
              are thoughtfully planned to create a beautiful haven for rest and
              relaxation. Ensuite and Guest Bathrooms are all fitted and
              finished to the highest standard.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
