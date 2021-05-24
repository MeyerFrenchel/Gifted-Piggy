import React from 'react';
import AboutSection from '../components/HeroSection/AboutSection';
import InfoSection from '../components/HeroSection/InfoSection';
import {homeObjOne} from '../components/HeroSection/Data';
import ServicesSection from '../components/HeroSection/ServicesSection';
import ProductSection from '../components/HeroSection/ProductsSection';


const Home = () => {


    return (
        <>
            <InfoSection/>
            <AboutSection {...homeObjOne}/>
            <ServicesSection/>
            <ProductSection/>
        </>
    );
};

export default Home;
