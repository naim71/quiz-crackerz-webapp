import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const Card = ({card}) => {
    const {id, name, total, logo} = card;
    return (
        
        <div>
            
        <div className="max-w-sm bg-cyan-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
         <a href="/">
        <img className="rounded-t-lg p-4" src={logo} alt=""/>
         </a>
    <div className="p-5">
        <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Total Questions: <span className='font-bold'>{total}</span></p>
        <Link to={`/quiz/${id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Practice
            <ArrowRightCircleIcon className="ml-2 h-4 w-4 text-white"/>
        </Link>
        
            
    </div>
</div>

        </div>
    );
};

export default Card;