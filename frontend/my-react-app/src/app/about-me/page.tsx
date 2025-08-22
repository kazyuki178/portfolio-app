import React from 'react'
import Profile from '../../components/Profile'

export const metadata = {
    title: "About | kazuki’s Portfolio",
    description: "ITエンジニア 矢橋和樹のプロフィール",
    
};


const AboutMe = () => {
    return (
        <Profile detailed={true} />
    )

}

export default AboutMe