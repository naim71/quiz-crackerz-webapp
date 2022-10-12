import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {
    return (
        <div className=' text-sky-800 text-xl font-medium space-x-12'>
                <Link to='/home'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
             
        </div>
    );
};

export default NavItems;