import React from 'react';
import { Link } from 'react-router-dom';
import { PAGESROUTEINFO } from '../../routes/PAGESROUTEINFO';



function Header() {
    return (
        <>
            <header className='bg-white'>
                <ul className='text-sm pt-9 flex justify-center gap-7 font-bold  sm:text-lg sm:gap-12 md:gap-28 lg:gap-36' >
                    {PAGESROUTEINFO.map(({path,name}) => (
                        <li className='first:ml-4' key={path}>
                            <Link to={path}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </header>
        </>
    )
}

export default Header