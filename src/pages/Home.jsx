import React, { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
const Hero = React.lazy(() => import('../components/Hero'));
const Carousel = React.lazy(() => import('../components/Carousel'));
const Catalog = React.lazy(() => import('../components/Catalog'));
const AboutUs = React.lazy(() => import('../components/AboutUs'));

const Home = () => {
    return (
        <div>
            <Suspense fallback={<LoadingSpinner/>}>
                <Hero />
                <AboutUs />
                <Carousel />
                <Catalog />
            </Suspense>
        </div>
    );
};

export default Home;