import { tourImg } from "../data/index.js";

const TourCard = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {tourImg.map((img, index) => (
        <div key={index} className="card w-full bg-base-100 shadow-xl overflow-hidden">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl transition-transform transform hover:scale-105" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Aria Show Apartment</h2>
            <div className="h-1 w-16 bg-[#D2AF6D] mx-auto my-3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourCard;
