import React, { useContext } from "react";

// Context
import { Context } from "../../Context";

// Icons
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProductDatail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(Context);

  console.log("-> ", productToShow);

  return (
    <div
      className={`${
        isProductDetailOpen
          ? "bg-gray-700/40 w-full h-full absolute top-[68px]"
          : "hidden"
      } `}
    >
      <aside className="flex flex-col fixed top-[68px] right-0 bg-white border rounded-l-lg w-[360px] h-[calc(100vh-68px)] p-6 overflow-auto">
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-xl">Detail</h2>
          <XMarkIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => closeProductDetail()}
          />
        </div>
        <figure>
          <img
            className="w-full h-64 object-contain rounded-sm mt-4"
            src={productToShow.image}
            alt={productToShow.title}
          />
        </figure>
        <p className="flex flex-col ">
          <span className="font-medium text-xl mt-4">
            {productToShow.title}
          </span>
          <span className="font-semibold mt-1">$ {productToShow.price}</span>
          <span className="text-gray-500 my-2">
            Category
            <span className=" text-gray-600 ms-4">
              {productToShow.category}
            </span>
          </span>
          <span className="font-base text-gray-600">
            {productToShow.description}
          </span>
        </p>
      </aside>
    </div>
  );
};

export default ProductDatail;
