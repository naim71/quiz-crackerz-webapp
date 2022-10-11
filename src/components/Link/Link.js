import React from 'react';

const Link = ({route}) => {
    return (
        <li className='text-sky-800 text-xl font-medium'><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;