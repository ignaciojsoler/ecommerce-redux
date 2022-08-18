import React from "react";

const Categories = ({ setFilter, data }) => {

  const filterProduct = (category) => {
    const updatedList = data.filter((product) => product.category === category)
    setFilter(updatedList)
  }

  return (
    <>
    <div className="w-full">
    <h2 className="text-center text-4xl">Our products</h2>
    </div>
      
      <div className="flex justify-start items-center space-x-4 py-8 px-4 overflow-scroll sm:justify-center  scrollbar-hide">
        <button className=" px-5 py-2 border rounded font-medium transition hover:bg-black hover:text-white active:bg-gray-700"
          onClick={() => setFilter(data)}>
          All
        </button>
        <button className=" px-5 py-2 border rounded font-medium transition hover:bg-black hover:text-white active:bg-gray-700"
          onClick={() => filterProduct("men's clothing")}>
          Men
        </button>
        <button className=" px-5 py-2 border rounded font-medium transition hover:bg-black hover:text-white active:bg-gray-700"
          onClick={() => filterProduct("women's clothing")}>
          Women
        </button>
        <button className=" px-5 py-2 border rounded font-medium transition hover:bg-black hover:text-white active:bg-gray-700"
          onClick={() => filterProduct("jewelery")}>
          Jewelery
        </button>
        <button className=" px-5 py-2 border rounded font-medium transition hover:bg-black hover:text-white active:bg-gray-700"
          onClick={() => filterProduct('electronics')}>
          Electronics
        </button>
      </div>
    </>
  );
};

export default Categories;
