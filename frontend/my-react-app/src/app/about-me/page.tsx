import React from 'react'
import Profile from '../../components/Profile'

export const metadata = {
    title: "kazuki’s Portfolio About Me | ITエンジニア 矢橋和樹  経歴・スキル・実績",
    description: "kazuki’s Portfolio Top。ITエンジニア矢橋和樹（Kazuki Yahashi）の経歴、スキル、Web制作・インフラ構築の実績を掲載したポートフォリオサイトです。",
};


const AboutMe = () => {
    return (
        <Profile mode={"aboutMe"} />
    )

}

export default AboutMe