import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import CoreValue from './CoreValue/CoreValue';
import Events from './Events/Events';
import HeroSection from './HeroSection/HeroSection';
import HomePackages from './HomePagePackages/HomePackages';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <HeroSection></HeroSection>
            <CoreValue></CoreValue>
            <HomePackages></HomePackages>
            <Events></Events> <br /> <br />
        </div>
    );
};

export default Home;