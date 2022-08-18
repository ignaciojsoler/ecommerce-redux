import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Carousel from '../components/Carousel';
import Catalog from '../components/Catalog';
import AboutUs from '../components/AboutUs';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutUs/>
            <Carousel/>
            <Catalog/>
        </div>
    );
};

export default Home;