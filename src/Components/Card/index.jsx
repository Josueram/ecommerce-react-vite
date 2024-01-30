import React, { useContext } from "react";

// Context
import { Context } from "../../Context";

// Icons
import { PlusIcon } from "@heroicons/react/24/solid";

const Card = ({ data }) => {
  const { count, setCount, openProductDetail, setProductToShow } =
    useContext(Context);

  const showProduct = (productDetail) => {
    openProductDetail();

    setProductToShow(productDetail);
  };

  return (
    <div
      className=" cursor-pointer rounded-md w-60 h-80 border border-gray bg-white"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-4 w-full h-4/6 object-contain">
        <img
          className="w-full h-full object-contain rounded-t-m"
          src={data.image}
          alt={data.title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-lg w-8 h-8 m-4 border"
          onClick={() => setCount(count + 1)}
        >
          <PlusIcon className="h-4 w-4" />
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
