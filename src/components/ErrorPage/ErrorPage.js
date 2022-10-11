import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='my-40'>

            <h1 className='text-9xl font-bold text-sky-800 my-auto'>404</h1>
            <p class="mb-4 text-3xl tracking-tight font-medium md:text-4xl text-gray-700 ">Something's missing.</p>
            <p class="mb-4 text-lg  text-sky-800 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Link to='/topics' className="inline-flex text-white hover:bg-green-400 bg-sky-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
            </div>

        </div>
    );
};

export default ErrorPage;