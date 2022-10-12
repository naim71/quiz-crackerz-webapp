import React from 'react';
import Cards from '../Cards/Cards';

const HeroSection = () => {
    return (
        <div>
        <div className='bg-sky-800 md:flex justify-between items-center rounded-3xl  shadow-2xl mx-12 my-10 p-24'>
            
            <div className='w-2/5'>
                <h1 className='text-green-400 text-6xl font-bold text-left'>Learn To Code</h1>
                <h4 className='text-white md:text-left'>Develop your programming skills by conducting our quizzes.The coding quiz is good for assessing general programming skills.</h4>
            </div>
            <div>
              <img className='w-full h-72' src="/images/asset-2.png" alt=""/>
            </div>
            
        </div>
        <Cards></Cards>
        </div>
    );
};

export default HeroSection;