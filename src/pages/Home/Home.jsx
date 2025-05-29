import React from 'react';
import About from './components/About';
import SpecialOffer from './components/SpecialOffer';
import Testimonial from './components/Testimonial';
import BlogSection from './components/BlogSection';
import Footer from '../../shared/Footer';

const Home = () => {
    return (
        <div>
            <About />

            <SpecialOffer />

            <Testimonial />

            <BlogSection />

            <Footer />
        </div>
    );
};

export default Home;