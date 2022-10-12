import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz.data.name);
    const quizQstn = quiz.data.questions;
    return (
        <div className='bg-white mx-20 rounded-xl'>
            <h1 className=''>Quiz of {quiz.data.name}</h1>
            {
                quizQstn.map(qstn => <QuizQuestions
                    key={qstn.id}
                    qstn={qstn} 
                >
                </QuizQuestions>)
            }
        </div>
    );
};

export default Quiz;