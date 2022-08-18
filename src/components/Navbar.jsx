import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import UserDropDownButton from "./UserDropDownButton";

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)
  const { list } = useSelector(state => state.cart)
  const { user } = useSelector(state => state.user)

  //TODO - Fix hover
  return (
    <nav className="absolute px-2 py-2.5 w-full z-50">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-7xl  sm:px-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
            Rêverie Shop
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none text-black active:text-gray-700"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsNavOpen(prev => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-40 md:hidden ${isNavOpen ? '' : 'hidden'}`} onClick={() => setIsNavOpen(false)}></div>
        <div className={`${isNavOpen ? 'fixed' : '-translate-x-full absolute md:translate-x-0'} transition duration-300 w-4/5 h-screen top-0 left-0 bg-white md:inline-block md:relative md:h-auto md:w-auto md:bg-transparent`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3  rounded   md:p-0 text-black md:hover:text-zinc-600  hover:text-zinc-600 md:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 pr-4 pl-3  rounded   md:p-0 text-black md:hover:text-zinc-600  hover:text-zinc-600 md:hover:bg-transparent"
              >
                Products
              </Link>
            </li>
            {
              user ? (
                <>
                  <li>
                    <Link
                      to='/cart'
                      className="block py-2 pr-4 pl-3rounded  md:p-0 text-black md:hover:text-zinc-600  hover:text-zinc-600 md:hover:bg-transparent"
                    >
                      <i className="fa fa-shopping-cart me-1 ml-3 mr-1 md:ml-0" /> Cart ({list.length > 0 ? list.length : "0"})
                    </Link>
                  </li>
                  <li>
                    <UserDropDownButton userName={user.displayName}/>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block py-2 pr-4 pl-3  rounded   md:p-0 text-black md:hover:text-zinc-600  hover:text-zinc-600 md:hover:bg-transparent"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="block py-2 pr-4 pl-3  rounded  md:p-0 text-black md:hover:text-zinc-600  hover:text-zinc-600 md:hover:bg-transparent"
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/login'
                      className="block py-2 pr-4 rounded md:p-0 text-black md:hover:text-zinc-600  hover:text-zinc-600 md:hover:bg-transparent"
                    >
                      <i className="fa fa-shopping-cart me-1 ml-3 mr-1 md:ml-0" /> Cart ({list.length > 0 ? list.length : "0"})
                    </Link>
                  </li>
                </>
              )
            }

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
