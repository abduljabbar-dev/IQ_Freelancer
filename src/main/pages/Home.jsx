import React from 'react';
import Navigation from '../component/Navigation';
import HeroSection from '../component/HeroSection';
import OurServices from '../component/OurServices';
import Business from '../component/Business';
import Satisfaction from '../component/Satisfaction';
import TeamSection from '../component/TeamSection';
import FaqSection from '../component/FaqSection';

const Home = () => {
    return (
        <div>
            <Navigation />
            <HeroSection />
            <OurServices />
            <Business />
            <Satisfaction />
            <TeamSection />
            <FaqSection />
        </div>
    );
};

export default Home;