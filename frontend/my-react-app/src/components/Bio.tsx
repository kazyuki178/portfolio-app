
import useTypewriter from '../hooks/useTypewriter';
import { ProfileProps } from '../interfaces/ProfileProps';



const Bio = ({ detailed }: ProfileProps) => {
    let meInfo: string;
    let meBackground: string




    // trueのときはaboutmeのpath
    if (detailed) {
        meInfo = `const profile = { 
    job: "IT",
    nameKanji: "矢橋 和樹",
    nameRoman: "kazuki yahashi",
    qualification: "応用情報技術者",
                   "基本情報技術者",
                   "Oracle認定Java Silver"
}`;

        meBackground = `高校3年生の頃に Swift に触れたことをきっかけに、情報技術に興味を持つようになる。  
コーディングやネットワーク、セキュリティ、ハードウェアを学び、情報技術に加えて、マネジメントの知識を備えたエンジニアを目指して、産業能率大学に入学。  
大学では組織マネジメントを専攻し、学費免除や「Student of the Year」を受賞して卒業。

在学中は情報教育のインターンに参加し、応用情報技術者試験の過去問道場（通称：過去問道場）では、経営戦略分野の解答解説を複数執筆。`;
        // elseは/でアクセスされたトップページ
    } else {
        meInfo = `const profile = { 
    job: "ITエンジニア",
    nameKanji: "矢橋 和樹",
    nameRoman: "kazuki yahashi",
    qualification: "応用情報技術者"
}`;

        meBackground = `ITエンジニア

産業能率大学 情報マネジメント学部を一部学費免除、Student of the Yearで卒業。組織管理専攻。
大学在籍中は、開発技術~情報学を学んだり、応用情報過去問道場で経営戦略の解説記事を複数書いたり、情報教育のインターンをしてました。

Front -> React, TS, SCSS, Tailwind
Back -> Java, Spring, Python
Network, Security`;
    }

    const devTypeSpeed:number=10;
    const meInfoTypeSpeed:number=30;
    const meBackgroundTypeSpeed:number=55;

    const displayedMeInfoText = useTypewriter(meInfo, devTypeSpeed);
    const displayedBackgroundText = useTypewriter(meBackground, devTypeSpeed);

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