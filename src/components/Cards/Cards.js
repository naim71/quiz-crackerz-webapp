import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
        .then(data => setCards(data.data))
        
    },[])
    return (
        <div>
        <div className='bg-sky-800 rounded-3xl  shadow-2xl mx-12 my-10 p-24'>
            <div className='grid md:grid-cols-4 gap-6'>
            {
            cards.map(card => <Card
                key={card.id}
                card={card} 
            ></Card>)
             }
                
                
            </div>
        </div>
        </div>
    );
};

export default Cards;