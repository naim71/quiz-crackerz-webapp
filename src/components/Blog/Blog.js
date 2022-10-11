import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 gap-4 mx-auto'>
        <div className="block p-10  w-8/12 h-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto">

           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is the purpose of React Router?</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">The major application for ReactJS Router is the creation of single page web applications. Multiple routes are defined in the application using React Router. A user will be sent to a specific route when they enter a particular URL into their browser and that URL path matches any of the "routes" in the router file.</p>
        </div>
        <div className="block p-10 w-8/12 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto">

           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How Does Context API Work?</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">Using the React Context API, a React app can create global variables that can be passed between different components. Moving props from a grandma to a child to a parent and so forth is an alternative to "prop drilling." A customer and a supplier are returned. A component known as a "provider" gives its children access to the state, as the name suggests. It will act as the parent to all components that could require the "store" and hold it. Interestingly, a component that consumes and uses the state is referred to as a consumer.</p>
        </div>
        <div className="block p-10 w-8/12 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto mb-10">

           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is useRef?</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">Using the built-in React hook useRef(initialValue), which takes one argument as the initial value and returns a reference (aka ref). Having the unique property current, an object is a reference.</p>
        </div>
        
           
        </div>
    );
};

export default Blog;