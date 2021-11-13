import React from 'react';
import Customize from './Customize/Customize.js';
import Products from './Products/Products.js';
import Slider from './Slider/Slider.js';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Customize></Customize>
            <Products></Products>
        </div>
    );
};

export default Home;