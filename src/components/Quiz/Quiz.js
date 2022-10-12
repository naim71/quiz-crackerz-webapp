import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const Quiz = () => {
    const quiz = useLoaderData();
   
    const quizQstn = quiz.data.questions;
    return (
        <div className='bg-violet-700 mx-20 rounded-xl mb-10 shadow-2xl shadow-violet-800'>
            <h1 className='text-white text-3xl font-bold p-5 mb-6'>Quiz of {quiz.data.name}</h1>
            <div  className='grid grid-cols-1 gap-10 mx-auto'>
            {
                quizQstn.map(qstn => <QuizQuestions
                    key={qstn.id}
                    qstn={qstn} 
                   
                >
                </QuizQuestions>)
            }
            </div>
            
        </div>
    );
};

export default Quiz;