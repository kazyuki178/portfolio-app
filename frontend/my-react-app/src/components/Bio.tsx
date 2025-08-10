import React from 'react'

function Bio() {
    return (
        <>
            <div className='max-w-[500px]'>

                {/* style={{ whiteSpace: 'pre-wrap'}　で改行をそのままhtmlで表示、そして幅超えたら折り返し(wrap) */}
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono shadow-2xl" style={{ whiteSpace: 'pre-wrap' }}>
                    {`const profile = { 
            job: "ITエンジニア",
            nameKanji: "矢橋 和樹",
            nameRoman: "yahashi kazuki",
            qualification: "応用情報技術者"
            }
                `}
                </div>

                <div className='bg-slate-100 shadow-2xl  rounded-lg mt-8 p-4'>
                    <h2>IT企業のエンジニア</h2>
                    <p>
                        産業能率大学 情報マネジメント学部を一部学費免除、Student of the Yearで卒業。
                        大学在籍中は、開発技術~情報学を学んだり、応用情報過去問道場で経営戦略の解説記事を複数書いたり、インターンをしてました。

                        <br />常に技術を使った面白いことを模索しています。
                    </p>
                </div>

            </div>

        </>
    )
}

export default Bio