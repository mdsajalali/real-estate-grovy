import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="container mx-auto mb-20">
      <div className="my-12 text-center text-white">
        <h1 className="text-4xl text-black">PROJECTS</h1>
        <p className="my-5 text-[18px] text-black">
          Take a tour of our ongoing & completed projects
        </p>
      </div>
      <ProjectCard />
    </div>
  );
};

export default Projects;
