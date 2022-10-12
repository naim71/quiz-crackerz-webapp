import React from 'react';

const QuizQuestions = ({qstn}) => {
    console.log(qstn);
    const {id, question, correctAnswer, options} = qstn;
    return (
        <div>
          
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{question}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>

        </div>
    );
};

export default QuizQuestions;