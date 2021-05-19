import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/HeroSection/InfoSection';
import {homeObjOne} from '../components/HeroSection/Data';


const Home = () => {


    return (
        <>
            <InfoSection/>
            <HeroSection {...homeObjOne}/>
        </>
    );
};

export default Home;
