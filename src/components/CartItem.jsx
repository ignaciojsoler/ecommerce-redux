import React from "react";

const CartItem = ({ data, removeItem, addMore}) => {
  const { title, quantity, price, image } = data;
  

  return (
    <div className="px-4 border-b py-6 md:flex">
      <div className="flex space-x-4  md:justify-start md:w-1/2 md:items-center">
        <div className="w-full overflow-hidden flex justify-start bg-white md:w-auto">
          <div className="w-24 flex justify-center">
            <img src={image} alt={title} className="h-20 object-contain" />
          </div>
        </div>
        <h3 className="text-xl px-2 text-end">{title}</h3>
      </div>
      <div className="flex justify-between items-center pt-5   md:w-1/2 md:items-center md:pt-0 md:justify-end md:space-x-10 ">
        <div className="flex border">
          <button className="py-2 px-4 hover:bg-gray-200 active:bg-gray-300" onClick={() => removeItem(data)}>
            -
          </button>
          <div className="flex justify-center items-center w-10">{quantity}</div>
          <button
            className="py-2 px-4  hover:bg-gray-200 active:bg-gray-300"
            onClick={() => addMore(data)}
          >
            +
          </button>
        </div>
        <div className="flex justify-end md:w-44">
          <h4 className="font-semibold text-2xl"> ${(price * quantity).toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
