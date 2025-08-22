import React from 'react';
import Link from 'next/link';
import PAGESROUTEINFO from '../../routes/PAGESROUTEINFO'



function Header() {
    return (
        <>
            <header className='bg-white'>
                <ul className='text-md pt-9 flex justify-center gap-8 font-bold  sm:text-lg sm:gap-12 md:gap-28 lg:gap-36' >
                    {PAGESROUTEINFO.map(({name,href}) => (
                        <li  key={name} className='transition-transform duration-300  hover:scale-110'>
                            <Link href={href}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </header>
        </>

        
    )
    
}



export default Header