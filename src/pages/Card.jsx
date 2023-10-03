import React from "react";
import book from "../assets/images/book.jpg";
import gallery from "../assets/images/gallery.jpg";

const Card = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center flex-wrap gap-5 mb-10">
        <div className="flex flex-col bg-white p-5 border border-black px-20 rounded-lg hover:shadow-2xl transition-all cursor-pointer">
          <img className="w-14" src={book} alt="" />
          <h1 className="text-2xl text-black">Company Profile</h1>
          <h2>Click to view or download our profile.</h2>
        </div>
        <div className="flex flex-col px-20 bg-white p-5 border border-black  rounded-lg hover:shadow-2xl transition-all cursor-pointer">
          <img className="w-14" src={gallery} alt="" />
          <h1 className="text-2xl text-black">Photo Gallery</h1>
          <h2>Take a sneak peek and enjoy the view</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
