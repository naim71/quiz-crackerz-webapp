import React from 'react';
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';


const Cards = () => {
    const cards = useLoaderData();
    const newCard = cards.data;
    console.log(newCard);
    return (
        <div className='bg-sky-800 rounded-3xl  shadow-xl mx-20 my-10 p-24'>
            <div className='grid grid-cols-4 gap-6'>
            {
            newCard.map(card => <Card
                key={card.id}
                card={card} 
            ></Card>)
             }
                
                
            </div>
        </div>
    );
};

export default Cards;