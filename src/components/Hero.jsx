import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <main className="flex flex-col justify-center min-h-screen max-h-screen bg-hero-mobile bg-right bg-cover bg-fixed space-y-8 bg-gray-300 bg-blend-overlay md:bg-left md:bg-hero-desktop  lg:bg-blend-normal md:grid md:grid-cols-12 md:grid-rows-3">
        <div className="px-4 flex flex-col justify-center items-center space-y-6 row-start-2 md:col-start-2 md:col-end-12 lg:col-start-7">
          <h1 className=" text-6xl text-center text-black cursor-default">New Season Arrivals</h1>
          <h2 className="text-2xl text-center text-black cursor-default">Discover and shop the latest trends in clothing, jewelry and electronics.</h2>
          <Link to="/products" className="text-2xl border-2 border-black text-black bg-transparent rounded-full px-10 py-3 transition hover:bg-black hover:text-white">Shop now</Link>
        </div>
        <div className="m-auto w-full max-w-screen-2xl flex justify-center md:absolute md:bottom-0">
          <a href="#about-us" className="m-auto text-2xl text-black absolute bottom-8 animate-pulse cursor-pointer"><i className="fa fa-chevron-down"></i></a>
        </div>

      </main>
    </>
  );
};

export default Hero;
