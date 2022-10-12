import React, { useState } from 'react';
import "./QuizQuestions.css";
import { EyeIcon, XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const QuizQuestions = ({qstn}) => {
    const {question, correctAnswer, options} = qstn;
    const [modal, setModal] = useState(false);

    const handleAlert = alert => {
        if(alert === correctAnswer){
            toast.success("Correct Answer");
        }
        else{
            toast.error("Incorrect Answer!");
        }
    }

    const toggleModal = () => {
    setModal(!modal);
    };

     if(modal) {
    document.body.classList.add('active-modal')
     } else {
    document.body.classList.remove('active-modal')
    }

    return (
        <div className='mb-16'>
          
        <div className="block p-6 md:w-8/12 md:h-11/12 bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto">
         <div className='relative'>
            <button onClick={toggleModal}><EyeIcon className="h-6 w-6 text-violet-600 absolute right-0 top-0"/>
            {modal && (
                <div className="modal relative">
                  <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                      <CheckCircleIcon className='mx-auto h-10 w-10 text-green-600'/> 
                      <h2 className='text-lg mb-5 font-semibold'>Correct Answer</h2>
                     <p className='mb-5 text-green-600 text-lg font-semibold border border-green-500 rounded-lg p-4'>{correctAnswer}</p>
            <button className="close-modal" onClick={toggleModal}><XMarkIcon className='absolute right-0 top-0 h-6 w-6 text-red-600'/></button>
          </div>
        </div>
      )}
            </button>
            
            

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white px-11">{question.slice(3,-4)}</h5>

         </div>

        <div className='md:flex-row'>
            <button onClick={() => handleAlert(qstn.options[0])} className='w-3/4 h-3/4 px-4 p-2 bg-violet-100 rounded-lg mb-5 text-lg font-medium hover:bg-violet-600 hover:text-white mt-7 '>{options[0]}</button>
            <button onClick={() => handleAlert(qstn.options[1])} className='w-3/4 h-3/4 px-4 p-2 bg-violet-100 rounded-lg mb-5 text-lg font-medium hover:bg-violet-600 hover:text-white'>{options[1]}</button>
            <button onClick={() => handleAlert(qstn.options[2])} className='w-3/4 h-3/4 px-4 p-2 bg-violet-100 rounded-lg mb-5 text-lg font-medium hover:bg-violet-600 hover:text-white'>{options[2]}</button>
            <button onClick={() => handleAlert(qstn.options[3])} className='w-3/4 h-3/4 px-4 p-2 bg-violet-100 rounded-lg mb-5 text-lg font-medium hover:bg-violet-600 hover:text-white'>{options[3]}</button>
            <ToastContainer/>
            
        </div>
        </div>

        </div>
    );
};

export default QuizQuestions;