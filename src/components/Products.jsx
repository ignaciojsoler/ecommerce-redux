import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import LoadingCards from "./LoadingCards";
import ShowProducts from "./ShowProducts";

const Products = () => {
  const [data, setData] = useState();
  const [filter, setFilter] = useState();
  const [loading, setLoading] = useState(true);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products", {mode: 'cors'});
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  return (
    <div className="bg-white pt-20">
      <Categories setFilter={setFilter} data={data} />
      <div className="grid">
        <div className=" auto-rows-auto justify-center">
          {loading ? <LoadingCards /> : <ShowProducts filter={filter} />}
        </div>
      </div>
    </div>
  );
};

export default Products;
