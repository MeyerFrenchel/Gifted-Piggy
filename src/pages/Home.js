import React from 'react';
import AboutSection from '../components/HeroSection/AboutSection';
import InfoSection from '../components/HeroSection/InfoSection';
import {homeObjOne} from '../components/HeroSection/Data';
import ServicesSection from '../components/HeroSection/ServicesSection';


const Home = () => {


    return (
        <>
            <InfoSection/>
            <AboutSection {...homeObjOne}/>
            <ServicesSection/>
        </>
    );
};

export default Home;
