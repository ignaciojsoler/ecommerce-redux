import React from "react";
import ProductCard from "./ProductCard";

const ShowProducts = ({ filter }) => {

  return (
    <>
      <div className="container mx-auto p-6 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filter.map((product, idx) => {
          return <ProductCard key={idx} data={product} />;
        })}
      </div>
    </>
  );
};

export default ShowProducts;
