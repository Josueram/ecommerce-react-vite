import React from "react";

const Card = () => {
  return (
    <div className=" cursor-pointer rounded-md w-56 h-80 border border-gray">
      <figure className="relative mb-4 w-full h-4/6 object-container">
        <img
          className="w-full h-full object-cover rounded-t-md"
          src="https://i.blogs.es/2add65/analisis-airpods-max-applesfera--67/1366_2000.jpg"
          alt="Headphones"
        />
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-md text-xs m-4 px-3 py-1">
          Electronics
        </span>
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-lg w-8 h-8 m-4">
          +
        </div>
      </figure>

      <p className="flex flex-col px-4">
        <span className="text-base text-semibold">$300</span>
        <span className="text-base text-gray-700">
          Headset for gaming with mic
        </span>
      </p>
    </div>
  );
};

export default Card;
