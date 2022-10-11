import React from 'react';

const HeroSection = () => {
    return (
        <div className='bg-sky-800 flex justify-between items-center rounded-3xl  shadow-xl mx-20 my-10 p-24'>
            
            <div>
                <h1 className='text-green-400 text-6xl font-bold text-left'>Learn To Code</h1>
                <h4 className='text-white'>Develop your programming skills by conducting our quizzes </h4>
            </div>
            <div>
              <img className='w-full h-72' src="/images/asset-2.png" alt=""/>
            </div>
        </div>
    );
};

export default HeroSection;