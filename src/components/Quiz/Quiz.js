import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz.data.questions);
    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default Quiz;