
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';
import useTypewriter from '../hooks/useTypewriter';
function TopImg() {

    type SnsIconType = {
        icon: IconDefinition;
        link: string;
        name: string;
    }

    const snsIcons: SnsIconType[] = [
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/kazyuki178/",
            name: "LinkedIn"
        },
        {
            icon: faSquareGithub,
            link: "https://github.com/kazyuki178",
            name: "GitHub"
        },
        {
            icon: faSquareXTwitter,
            link: "https://x.com/kazyuki178",
            name: "X"
        },
        {
            icon: faBookAtlas,
            link: "https://qiita.com/kazyuki178",
            name: "Qiita"
        }
    ];

    const name: string = `Kazuki Yahashi
    矢橋 和樹 `;

    const typeWriteName = useTypewriter(name,"name", 100);


    return (
        <>
            <div className='flex flex-col items-center'>
                {/* 
                画像の元サイズ（ピクセル）**として240×240を指定
                これによって、Next.jsは画像のアスペクト比やレイアウトを安定化
                そして、Tailwindのmd:w-80 md:h-80でサイズによってImageの大きさを変更
                */}
                <Image src='/Me.jpg' className='  md:w-72 rounded-full ' width={250} height={250} alt='矢橋和樹のプロフィール画像' priority/>

                <h1 className='mt-6  text-2xl h-[64px]' style={{ whiteSpace: "pre-wrap" }}>{typeWriteName}
                    <span className="blinking-cursor text-black">|</span>
                </h1>

                <ul className='flex gap-7 mt-6'>
                    {snsIcons.map((element) => (
                        <li key={element.link}>
                            {/* noopener 	Reverse Tabnabbing（元ページの乗っ取り）対策
                            noreferrer Referer情報の漏洩
                            デフォルトブラウザで対応済みだけど一応明示 */}
                            <a href={element.link} target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={element.icon} size='3x' className='transition-transform duration-300  hover:scale-110' />
                                <p className='text-center text-sm'>{element.name}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TopImg