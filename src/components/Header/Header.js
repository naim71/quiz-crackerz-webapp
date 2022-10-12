import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import HeroSection from '../HeroSection/HeroSection';
const Header = () => {
    const cards = useLoaderData();
    console.log(cards);
    return (
        <div>
            <HeroSection></HeroSection>
            <Cards></Cards>
        </div>
    );
};

export default Header;