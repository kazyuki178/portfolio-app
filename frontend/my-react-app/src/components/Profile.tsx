"use client";
import React from 'react';
import TopImgAndSnsLinks from './TopImgAndSnsLinks';
import Bio from './Bio';
import { ProfileProps } from '../interfaces/ProfileProps';



const Profile = ({detailed}:ProfileProps) => {
    return (
        <>
            <div className='flex flex-col md:flex-row gap-20 justify-center items-center mt-28 '>
                <TopImgAndSnsLinks />
                <Bio detailed={detailed??false}/>
            </div>

        </>
    )
}

export default Profile