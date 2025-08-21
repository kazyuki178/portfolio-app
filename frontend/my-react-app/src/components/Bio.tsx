
import profileData from '../data/profile';
import useTypewriter from '../hooks/useTypewriter';
import { ProfileProps } from '../interfaces/ProfileProps';



const Bio = ({ detailed }: ProfileProps) => {
    let meInfo: string;
    let meBackGroundInfo: string;


    // trueのときはaboutmeのpath
    if (detailed) {
        meInfo = profileData.detail.meInfo;
        meBackGroundInfo = profileData.detail.meBackGroundInfo;
        // elseは/でアクセスされたトップページ
    } else {
        meInfo = profileData.basic.meInfo;
        meBackGroundInfo = profileData.basic.meBackGroundInfo;
    }

    const devTypeSpeed: number = 10;
    const meInfoTypeSpeed: number = 30;
    const meBackGroundInfoTypeSpeed: number = 55;

    const displayedMeInfoText = useTypewriter(meInfo, meInfoTypeSpeed);
    const displayedBackgroundText = useTypewriter(meBackGroundInfo, meBackGroundInfoTypeSpeed);

    return (

        // sm:  640px以上   // スマホ〜小型タブレット
        // md:  768px以上   // タブレット
        // lg: 1024px以上   // ノートPC
        // xl: 1280px以上   // デスクトップ
        // 2xl:1536px以上   // 大型ディスプレイ
        <div className=' w-[350px] sm:w-[500px]  md:w-[350px] lg:w-[500px] text-sm'>

            <div
                className={`bg-gray-900 text-green-400 p-4 rounded-lg font-mono shadow-2xl ${detailed ? "min-h-[200px]" : "min-h-[160px]"
                    }`}
                style={{ whiteSpace: "pre-wrap" }}
            >
                {displayedMeInfoText}
                <span className="blinking-cursor text-white">|</span>
            </div>

            <div
                className="bg-slate-100 shadow-2xl  rounded-lg mt-8 p-4 min-h-[240px]"


                style={{ whiteSpace: 'pre-wrap' }} >
                {displayedBackgroundText}
                <span className="blinking-cursor text-black">|</span>
            </div>
        </div>
    )
}

export default Bio