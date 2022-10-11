import React from 'react';
import Card from '../Card/Card';

const Cards = () => {
    return (
        <div className='bg-sky-800 rounded-3xl  shadow-xl mx-20 my-10 p-24'>
            <div className='grid grid-cols-4 gap-4'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
};

export default Cards;