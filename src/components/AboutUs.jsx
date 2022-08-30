import React from 'react';
import aboutImgMobile from '../assets/aboutUsMobile.webp'

const AboutUs = () => {
    return (
        <div id='about-us' className='relative w-full h-screen max-w-full'>
            <div className=' flex flex-col justify-center space-y-10 w-full h-full sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:space-y-0'>
                <div className='  flex flex-col items-center justify-center space-y-4 mx-8 sm:items-start sm:mx-12'>
                    <h2 className='text-black text-4xl '>About us</h2>
                    <p className=' text-justify leading-7 sm:text-lg'>A passionate drive to exceed expectations. For more than 20 years, we've worked to deliver the best possible shopping experience, helping our customers express their style—not just buy products.
                        Reverie shop is a leading store offering compelling clothing, jewerely and electronics for men and women. Since 2000, we've been committed to providing our customers with the best possible service—and to improving it every day.</p>
                </div>
                <div>
                    <img src={aboutImgMobile} alt="" className='h-72 rounded-full m-auto sm:hidden'/>
                    <img src={aboutImgMobile} alt="" className='h-full object-cover hidden sm:block'/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;