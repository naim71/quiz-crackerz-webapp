import React, { useState } from 'react';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import NavItems from '../NavItems/NavItems';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [open, setOpen] =useState(false);
    
    return (
        <div>
            <div onClick={() => setOpen(!open)} className="h-8 w-8 text-sky-800 md:hidden mt-2 ml-2">
            {
                open ?  <XCircleIcon/>  : <Bars3Icon/>
            }
            </div>
           
            <nav className='md:flex justify-between items-center mx-20 px-10 my-10'>
                <h1 className='text-sky-800 font-bold text-3xl'><Link to='/'>Quizology</Link></h1>
                <div className={`md:flex md:space-x-12 absolute  md:static ${open ? 'bg-white left-0 top-10 w-full' : 'top-[-200px]'}`}>
                <NavItems></NavItems>
                </div>
            </nav>
        </div>
      
);
};

export default Navbar;