import React from "react";
import book from "../assets/images/book.jpg";
import gallery from "../assets/images/gallery.jpg";

const Card = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-2 mb-10 flex flex-wrap items-center justify-center gap-5">
        <div className="flex cursor-pointer flex-col rounded-lg border border-black bg-white p-5 px-20 transition-all hover:shadow-2xl">
          <img className="w-14" src={book} alt="" />
          <h1 className="text-2xl text-black">Company Profile</h1>
          <h2>Click to view or download our profile.</h2>
        </div>
        <div className="flex cursor-pointer flex-col rounded-lg border border-black bg-white  p-5 px-20 transition-all hover:shadow-2xl">
          <img className="w-14" src={gallery} alt="" />
          <h1 className="text-2xl text-black">Photo Gallery</h1>
          <h2>Take a sneak peek and enjoy the view</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
