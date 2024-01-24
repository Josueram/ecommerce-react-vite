import React from "react";

const Card = ({ data }) => {
  return (
    <div className=" cursor-pointer rounded-md w-56 h-80 border border-gray">
      <figure className="relative mb-4 w-full h-4/6 object-container">
        <img
          className="w-full h-full object-contain rounded-t-md"
          src={data.image}
          alt={data.title}
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-lg w-8 h-8 m-4 border">
          +
        </div>
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-md text-xs m-4 px-3 py-1 border">
          {data.category}
        </span>
      </figure>

      <p className="flex flex-col m-4">
        <span className="text-base text-medium mb-1">${data.price}</span>
        <span className="text-base text-gray-500 line-clamp-2">
          {data.title}
        </span>
      </p>
    </div>
  );
};

export default Card;
