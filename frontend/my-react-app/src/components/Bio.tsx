
import useTypewriter from '../hooks/useTypewriter';

function Bio() {
    const meInfo: string = `const profile = { 
    job: "ITエンジニア",
    nameKanji: "矢橋 和樹",
    nameRoman: "kazuki yahashi",
    qualification: "応用情報技術者"
}`;

    const meBackground: string = `ITエンジニア

産業能率大学 情報マネジメント学部を一部学費免除、Student of the Yearで卒業。組織管理専攻。
大学在籍中は、開発技術~情報学を学んだり、応用情報過去問道場で経営戦略の解説記事を複数書いたり、情報教育のインターンをしてました。

Front -> React, TS, SCSS, Tailwind
Back -> Java, Spring, Python
Network, Security`;

    const displayedMeInfoText = useTypewriter(meInfo, 30);
    const displayedBackgroundText = useTypewriter(meBackground, 80);

    return (

        // sm:  640px以上   // スマホ〜小型タブレット
        // md:  768px以上   // タブレット
        // lg: 1024px以上   // ノートPC
        // xl: 1280px以上   // デスクトップ
        // 2xl:1536px以上   // 大型ディスプレイ
        <div className=' w-[350px] sm:w-[500px]  md:w-[350px] lg:w-[500px] text-sm'>
            <div className=" bg-gray-900 text-green-400 p-4 rounded-lg font-mono shadow-2xl min-h-[160px]" style={{ whiteSpace: 'pre-wrap' }}>
                {displayedMeInfoText}
                <span className="blinking-cursor text-white">|</span>
            </div>

            <div className='bg-slate-100 shadow-2xl  rounded-lg mt-8 p-4  min-h-[240px]' style={{ whiteSpace: 'pre-wrap' }} >
                {displayedBackgroundText}
                <span className="blinking-cursor text-black">|</span>
            </div>
        </div>
    )
}

export default Bio