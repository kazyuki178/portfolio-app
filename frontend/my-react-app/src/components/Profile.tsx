import React from 'react';
import TopImgAndSnsLinks from './TopImgAndSnsLinks';
import Bio from './Bio';

function Profile() {
    return (
        <>
            <div className='flex gap-20 justify-center items-center mt-16'>

                <div className='flex-col'>
                    <TopImgAndSnsLinks />
                </div>

                <div className='flex-col'>
                    <Bio />
                </div>

            </div>
        </>
    )
}

export default Profile