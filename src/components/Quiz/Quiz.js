import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const Quiz = () => {
    const quiz = useLoaderData();
    const quizQstn = quiz.data.questions;
    return (
        <div className='bg-white mx-20 rounded-xl'>
            <h1 className='text-sky-800 text-2xl font-bold p-5'>Quiz of {quiz.data.name}</h1>
            <div  className='grid grid-cols-1 gap-6 mx-auto'>
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