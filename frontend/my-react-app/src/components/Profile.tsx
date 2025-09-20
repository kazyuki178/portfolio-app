"use client";
import React from 'react';
import TopImgAndSnsLinks from './TopImgAndSnsLinks';
import Bio from './Bio';
import { ProfileProps } from '../interfaces/ProfileProps';



const Profile = ({mode}:ProfileProps) => {
    return (
        <>
            <div className='flex flex-col  md:flex-row gap-20 justify-center items-center pt-36  pb-16 '>
                <TopImgAndSnsLinks />
                <Bio mode={mode??"top"}/>
            </div>

        </>
    )
}

export default Profile