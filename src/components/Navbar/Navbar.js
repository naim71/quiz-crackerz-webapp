import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] =useState(false);
    const routes = [
        {id: 1, name: 'Topics', path: '/topics'},
        {id: 2, name: 'Statistics', path: '/statistics'},
        {id: 3, name: 'Blog', path: '/blog'},
    ]
    
    return (
        <div>
            <div onClick={() => setOpen(!open)} className="h-8 w-8 text-sky-800 md:hidden mt-2 ml-2">
            {
                open ?  <XCircleIcon/>  : <Bars3Icon/>
            }
            </div>
           
            <nav className='md:flex justify-between items-center mx-20 px-10 my-10'>
                <h1 className='text-sky-800 font-bold text-3xl'><a href='/'>Quizology</a></h1>
                <ul className={`md:flex md:space-x-12 absolute  md:static ${open ? 'bg-white left-0 top-10 w-full' : 'top-[-200px]'}`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
        </div>
      
);
};

export default Navbar;