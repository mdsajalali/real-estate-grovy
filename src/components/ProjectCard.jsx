import { projectImg, projectLogo } from "./../data/index";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 2xl:grid-cols-3 ">
      {projectImg.map((img, index) => (
        <div key={index}>
          <div className="my-5 flex items-center gap-5">
            <div className="w-16">
              <img src={projectLogo[index]} alt="" />
            </div>
            <div>
              <h1>Aura</h1>
              <h2>Welcome Home</h2>
            </div>
          </div>
          <div className="card w-[350px] transform bg-base-100 shadow-xl transition-transform hover:scale-105 hover:shadow-2xl xl:w-96">
            <figure className="h-[200px] w-full">
              <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <p className="text-[14px]">
                Arriving at your home in Aura is an experience equal to entering
                the most exclusive hotels. Open-plan living spaces let you
                create a space that best suits your furnishing needs. Spacious
                Bedrooms are thoughtfully planned to create a beautiful haven
                for rest and relaxation.
              </p>
              <div className="card-actions">
                <button className="btn btn-neutral transition-opacity hover:opacity-80">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
