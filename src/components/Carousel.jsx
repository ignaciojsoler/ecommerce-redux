import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import swiper1 from '../assets/swiper1.webp'
import swiper2 from '../assets/swiper2.webp'
import swiper3 from '../assets/swiper3.webp'
import { Fade } from "react-reveal";

//TODO - changes this component name
const Carousel = () => {

    return (
        <Fade>
            <section className='h-screen bg-white'>
                <Swiper pagination={true} modules={[Pagination]} loop={true} speed={300} className="h-screen swiper-button-white">

                    <SwiperSlide>
                        <div className="absolute h-full w-full flex flex-col items-center justify-center space-y-6 px-10 cursor-grab">
                            <h2 className=" text-white text-6xl text-center cursor-grab">Discover the latest trends</h2>
                            <h3 className=" text-white text-xl text-center cursor-grab">You can have anything you want in life if you dress for it.</h3>
                        </div>
                        <img src={swiper1} className=" h-screen object-cover w-full filter brightness-50 relative -z-10" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="absolute h-full w-full flex flex-col items-center justify-center space-y-6 px-10 cursor-grab">
                            <h2 className=" text-white text-6xl text-center cursor-grab">The finest jewels are here</h2>
                            <h3 className=" text-white text-xl text-center cursor-grab">Reverie shop has the most dazzling jewelry you can find.</h3>
                        </div>

                        <img src={swiper2} className=" h-screen object-cover object-center w-full filter brightness-50 relative -z-10" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="absolute h-full w-full flex flex-col items-center justify-center space-y-6 px-10 cursor-grab">
                            <h2 className=" text-white text-6xl text-center cursor-grab">Get the latest tech products</h2>
                            <h3 className=" text-white text-xl text-center cursor-grab">The store has a wide variety of technological products in its catalog. Time to go find them!</h3>
                        </div>
                        <img src={swiper3} className=" h-screen object-cover w-full filter brightness-50 relative -z-10" />
                    </SwiperSlide>

                </Swiper>

            </section >
        </Fade>
    );
};

export default Carousel;