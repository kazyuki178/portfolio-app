import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';
function TopImg() {

    const snsIcons = [
        faLinkedin,
        faSquareGithub,
        faSquareXTwitter,
        faBookAtlas
    ];
    return (
        <>
            <img src='/Me.jpg' className='w-80 rounded-full'></img>


            <div>
                <ul className='flex gap-4'>
                    {snsIcons.map((icon, index) => (
                        <li key={index}>
                        <a>
                            {/* linkも配列に格納するべき     */}
                            <FontAwesomeIcon icon={icon} size='3x' />
                        </a>
                        </li>
                    ))}

                </ul>
            </div>
        </>
    )
}

export default TopImg