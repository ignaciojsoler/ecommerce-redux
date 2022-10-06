import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link, useNavigate } from "react-router-dom";
import cartImage from '../assets/cartImage.webp'
import Swal from 'sweetalert2'

//Redux Toolkit
import { useDispatch } from "react-redux";
import { addItem, deleteItem, clearList } from "../features/cart/cartSlice";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const { list } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const addMore = (product) => {
    dispatch(addItem(product));
  };

  const removeItem = (product) => {
    dispatch(deleteItem(product));
  };

  const clearCart = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#fff',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'swalBtnColor',
        cancelButton: 'swalBtnColor'
      }
    }).then((res) => {
      if (res.isConfirmed) {
        dispatch(clearList());
      }
    })
    
  };

  //Add sweet alert to this
  const checkOut = () => {
    Swal.fire({
      title: 'Confirm purchase',
      text: `Do you want to buy for $${totalPrice.toFixed(2)}`,
      showCancelButton: true,
      cancelButtonColor: '#fff',
      confirmButtonText: 'Confirm',
      reverseButtons: true,
      icon: 'question',
      customClass: {
        confirmButton: 'swalBtnColor',
        cancelButton: 'swalBtnColor'
      }
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          title: 'Thank you!',
          text: `Your purchase was completed successfully.`,
          icon: 'success',
          showConfirmButton: false
        })
        dispatch(clearList());
      }
    }) 
  };

  useEffect(() => {
    let items = 0
    let price = 0

    list.forEach(item => {
      items += item.quantity
      price += item.quantity * item.price
    })

    setTotalPrice(price)
    setTotalItems(items)
  }, [list, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  useEffect(() => {
    !user && navigate('/login')
  }, [])


  return (
    <div className="absolute pt-20 w-full h-full m-auto max-w-7xl md:px-12 md:relative">
      <div className=" mx-auto md:border md:px-10 md:rounded">
        <h3 className=" font-semibold text-2xl text-center py-5">
          Cart ({list.length > 0 ? list.length : "0"})
        </h3>

        {list.length !== 0 ? (
          list.map((item, idx) => {
            return (
              <CartItem
                key={idx}
                data={item}
                removeItem={removeItem}
                addMore={addMore}
              />
            );
          })
        ) : (
          /*Empty cart*/
          <div className="flex flex-col items-center space-y-4 mx-5">
            <div className="py-2">
            <img
              src={cartImage}
              className="h-60 rounded-full"
            />
            </div>
            
            <h3 className="text-center mx-auto font-bold text-2xl">
              Oops! Your cart is empty
            </h3>
            <h5 className="text-center mx-auto">
              Looks like you haven't added anything to your cart yet.
            </h5>
            <div className="py-10">
              <Link
                to="/products"
                className="  bg-black text-white border-2 border-black px-5 py-2 rounded font-semibold h-11 w-26 hover:bg-white hover:text-black"
              >
                Shop now
              </Link>
            </div>
          </div>
        )}

        {list.length > 0 && (
          <>
            <div className=" border-b md:border-none">
              <button className="p-4 font-semibold text-red-600" onClick={clearCart}>
                Clear cart
              </button>
            </div>
            <div className="fixed border px-4 py-8 space-y-5 mt-10 shadow-topShadow bottom-0 w-full bg-white md:relative md:shadow-none md:border-none">
              <div className="flex justify-between text-2xl md:justify-end">
                <h4 className="md:mr-5">Total</h4>

                <h4>${totalPrice.toFixed(2)}</h4>
              </div>
              <div className="md:flex md:justify-end md:border-t md:pt-6">
                <button
                  className="p-4 bg-black text-white font-semibold rounded border-2 border-black w-full transition  hover:bg-white hover:text-black md:w-40 md:right-0"
                  onClick={checkOut}
                >
                  Checkout
                </button>
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
