import React from 'react';
import CoreValue from './CoreValue/CoreValue';
import Events from './Events/Events';
import HeroSection from './HeroSection/HeroSection';
import HomePackages from './HomePagePackages/HomePackages';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <CoreValue></CoreValue>
            <HomePackages></HomePackages>
            <Events></Events>
        </div>
    );
};

export default Home;