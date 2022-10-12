import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'


const QuizQuestions = ({qstn}) => {
    console.log(qstn);
    const {id, question, correctAnswer, options} = qstn;
    return (
        <div>
          
        <div className="block p-6 md:w-8/12 md:h-11/12 bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto">
         <div className='relative'>
            <button><EyeIcon className="h-6 w-6 text-violet-600 absolute right-0 top-0"/></button>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white px-11">{question.slice(3,-4)}</h5>

         </div>

        <div className='md:flex-row'>
            <button className='w-3/4 h-3/4 px-4 p-2 bg-violet-100 rounded-lg mb-5 text-lg font-medium hover:bg-violet-600 hover:text-white mt-7 '>{options[0]}</button>
            <button className='w-3/4 h-3/4 px-4 p-2 bg-violet-100 rounded-lg mb-5 text-lg font-medium hover:bg-violet-600 hover:text-white'>{options[1]}</button>
            <button className='w-3/4 h-3/4 px-4 p-2 bg-violet-100 rounded-lg mb-5 text-lg font-medium hover:bg-violet-600 hover:text-white'>{options[2]}</button>
            <button className='w-3/4 h-3/4 px-4 p-2 bg-violet-100 rounded-lg mb-5 text-lg font-medium hover:bg-violet-600 hover:text-white'>{options[3]}</button>
            
        </div>
        </div>

        </div>
    );
};

export default QuizQuestions;