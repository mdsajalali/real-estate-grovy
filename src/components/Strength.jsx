import { strengthImg } from "../data";

const Strength = () => {
  return (
    <div className="mx-10 grid grid-cols-1 gap-10 md:mx-0 md:grid-cols-2 lg:grid-cols-4">
      {strengthImg.map((img, index) => (
        <div key={index} className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-md shadow-md">
          <img className="w-[110px] md:w-20 rounded-full" src={img} alt="" />
          <p className="text-center">
            More than 35 successful years of experience in the real estate industry
          </p>
        </div>
      ))}
    </div>
  );
};

export default Strength;
