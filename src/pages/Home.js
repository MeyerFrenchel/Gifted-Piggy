import React from 'react';
import AboutSection from '../components/HeroSection/AboutSection';
import InfoSection from '../components/HeroSection/InfoSection';
import {homeObjOne} from '../components/HeroSection/Data';


const Home = () => {


    return (
        <>
            <InfoSection/>
            <AboutSection {...homeObjOne}/>
        </>
    );
};

export default Home;
