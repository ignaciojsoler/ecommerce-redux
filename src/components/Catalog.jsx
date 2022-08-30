import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import catalogDesktop from '../assets/catalogDesktop.webp'

const Catalog = () => {
    return (
        <section className='h-screen w-full '>
            <div className='absolute filter h-full w-full bg-catalog-mobile bg-gray-300 bg-fixed bg-blend-overlay bg-center bg-cover max-w-screen-2xl'>
            </div>
            <div className='relative  w-full h-full flex flex-col justify-center sm:flex-row sm:items-center'>
                <div className='text-center space-y-10'>
                    <Fade cascade top>
                    <h3 className='text-5xl'>Our products</h3>
                    <p className='text-xl mx-10'>Take a look at our latest products and find the best clothes. Explore the different categories and find the most elegant jewelry and the latest electronics.</p>
                    <Link to="/products" className='inline-block text-2xl border-2 border-black bg-black text-white rounded-full px-10 py-3 transition hover:bg-transparent hover:text-black'>Go to products</Link>
                    </Fade>
                </div>
                <div className='hidden sm:block sm:relative'>
                    <Fade>
                    <div to="/products" className='group relative transition hover:scale-95'>
                        <img src={catalogDesktop} className="relative z-0 transition" />
                        <Link to="/products" className='absolute bg-black w-full h-full top-0 bg-opacity-60 opacity-0 flex items-center justify-center transition group-hover:opacity-100'>
                            <h3 className='text-4xl z-20 text-white '>Explore products</h3>
                        </Link>
                    </div>
                    </Fade>
                </div>
            </div>

        </section>
    );
};

export default Catalog;