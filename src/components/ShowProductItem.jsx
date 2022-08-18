import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ShowProductItem = ({ data, addProduct, buttonState }) => {
  let { title, price, category, description, image } = data;

  const { user } = useSelector(state => state.user)

  const navigate = useNavigate()

  return (
    <div className="grid gap-x-5 grid-cols-1 sm:grid-cols-2 mx-auto max-w-4xl">
      <div className="overflow-hidden flex justify-center items-center px-4">
        <img src={image} alt={title} className=" object-contain" />
      </div>
      <div className="p-3 space-y-4 max-w-md">
        <h4 className=" uppercase text-gray-500 font-semibold">{category}</h4>
        <h1 className=" text-4xl font-semibold">{title}</h1>
        <h3 className="text-4xl font-bold">${price}</h3>
        <ul className="flex items-center">
          <li>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              className="w-4 text-yellow-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              className="w-4 text-yellow-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              className="w-4 text-yellow-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              className="w-4 text-yellow-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="star"
              className="w-4 text-yellow-500"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
              ></path>
            </svg>
          </li>
        </ul>
        <p className=" ">{description}</p>
        <div className="flex space-x-4">
          {
            buttonState ? (<button className="transition border-2 border-black px-5 py-2 rounded font-semibold h-11 w-26 hover:bg-black hover:text-white active:bg-gray-700"
              onClick={user ? () => addProduct(data) : () => navigate('/login')}>
              Add to Cart
            </button>) : (
            <Link to="/products" className="transition border-2 border-black px-5 py-2 rounded font-semibold h-11 w-26 hover:bg-black hover:text-white active:bg-gray-700">
              
                Return to shop            
               
                </Link>
            )
          }

          <div>
            <Link to={"/cart"}>
              <button className="transition  bg-black text-white border-2 border-black px-5 py-2 rounded font-semibold h-11 w-26 active:bg-gray-700">
                Go to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProductItem;
