import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
function TopImg() {

    type SnsIconType = {
        icon: IconDefinition;
        link: string;
    }

    const snsIcons: SnsIconType[] = [
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/%E5%92%8C%E6%A8%B9-%E7%9F%A2%E6%A9%8B-98b757301/"
        },
        {
            icon: faSquareGithub,
            link: "https://github.com/kazuki178"
        },
        {
            icon: faSquareXTwitter,
            link: "https://x.com/178_c_m_"
        },
        {
            icon: faBookAtlas,
            link: "https://qiita.com/178_c_m"
        }
    ];


    return (
        <>
            <div className='flex flex-col items-center'>
                <img src='/Me.jpg' className='w-80 rounded-full ' />

                <ul className='flex gap-4 mt-6'>
                    {snsIcons.map((element) => (
                        <li key={element.link}>
                            {/* noopener 	Reverse Tabnabbing（元ページの乗っ取り）対策
                            noreferrer Referer情報の漏洩
                            デフォルトブラウザで対応済みだけど一応明示 */}
                            <a href={element.link} target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={element.icon} size='3x' />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TopImg