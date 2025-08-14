"use client";
import React from 'react';
import TopImgAndSnsLinks from './TopImgAndSnsLinks';
import Bio from './Bio';


function Profile() {
    return (
        <>
            <div className='flex flex-col md:flex-row gap-20 justify-center items-center mt-28 '>
                <TopImgAndSnsLinks />
                <Bio />
            </div>
            
        </>
    )
}

export default Profile