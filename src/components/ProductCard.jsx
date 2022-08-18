import React from "react";
import { Link } from "react-router-dom";
import truncate from "../helpers/truncate";

const ProductCard = ({ data }) => {
  let { id, title, price, image } = data;

  return (
    <Link
      to={`/products/${id}`}
      className="group bg-white rounded-lg shadow-md transition duration-200"
    >
      <div>
        <div className=" relative w-full h-56 overflow-hidden flex justify-center bg-white transition duration-200  group-hover:z-0">
          
          <img
            className="rounded-t-lg  z-10 transition duration-200 object-contain group-hover:scale-95"
            src={image}
            alt="product image"
          />
          <div className="absolute opacity-0 w-full h-full group-hover:opacity-100 rounded-t-lg"></div>
        </div>
      </div>
      <div className="px-5 py-5">
        <div className="flex flex-col items-start space-y-2">
          <span className="text-sm text-gray">
            {truncate(title, 40, "...")}
          </span>
          <span className="text-md font-semibold text-gray">${price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
