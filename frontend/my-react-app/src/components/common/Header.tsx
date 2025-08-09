import React from 'react';
import { Link } from 'react-router-dom';
import { PAGESROUTEINFO } from '../../routes/PAGESROUTEINFO';



function Header() {
    return (
        <>
            <header className='bg-red-400'>
                <ul className='p-4 flex space-x-8 font-bold text-lg'>
                    {PAGESROUTEINFO.map(element => (
                        <li className='first:ml-4' key={element.path}>
                            <Link to={element.path}>{element.name}</Link>
                        </li>
                    ))}
                </ul>
            </header>
        </>
    )
}

export default Header