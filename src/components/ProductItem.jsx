import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ShowProductItem from "./ShowProductItem";
import Swal from 'sweetalert2'
//Redux Toolkit
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import LoadingProduct from "./LoadingProduct";

const ProductItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttonState, setButtonState] = useState(true)

  //Redux Toolkit
  const dispatch = useDispatch();

  const addProduct = (product) => {
    Swal.fire({
      title: 'Good job!',
      text: `"${product.title}" has been added to  your cart.`,
      icon: 'success',
      showConfirmButton: false
    }
      
    )
    dispatch(addItem(product));
    setButtonState(false)
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`, {mode: 'cors'});
      setProduct(await res.json());
      console.log(res);
      setLoading(false);
    };

    getProduct();
  }, []);

  return (
    <div>
      <div className="m-auto">
        {loading ? (
          <LoadingProduct/>
        ) : (
          <ShowProductItem data={product} addProduct={addProduct} buttonState={buttonState}/>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
