import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        {id: 1, name: 'Topics', path: '/topics'},
        {id: 2, name: 'Statistics', path: '/statistics'},
        {id: 3, name: 'Blog', path: '/blog'},
    ]
    
    return (
            <nav className='flex justify-between items-center mx-20 px-10 my-10'>
                <h1 className='text-sky-800 font-bold text-3xl'><a href='/'>Quizology</a></h1>
                <ul className='flex space-x-12'>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
      
);
};

export default Navbar;