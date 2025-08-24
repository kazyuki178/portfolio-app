'use client';
import { useEffect, useState } from 'react';
import { getQiitaItems } from '../lib/qiita';
import type { QiitaItem } from '../interfaces/QiitaItem.ts'; // 型定義がある場合

export default function RecentActivity() {
    const [items, setItems] = useState<QiitaItem[]>([]);

    // 初回マウント時のみ実行
    useEffect(() => {
        async function fetchItems() {
            const data = await getQiitaItems();
            data.sort(
                (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            );
            setItems(data);
        }
        fetchItems();
    }, []);

    return (
        <section>
            <h2 className="text-center text-lg mb-14">最近の投稿</h2>
            <ul className='flex flex-col items-center '>
                {items.length === 0 ? (
                    <li>読み込み中...</li>
                ) : (
                    items.map(item => (
                        <li key={item.id} className='mb-9 flex items-center justify-center bg-slate-100 shadow-2xl  rounded-lg  w-[350px] sm:w-[500px]  md:w-[700px]   h-24 p-3  transition-transform duration-300  hover:scale-105'>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <p className="text-center pb-2 text-sm text-gray-500">
                                    {new Date(item.updated_at).toLocaleDateString('ja-JP', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                    })} 更新
                                </p>
                                {item.title}
                            </a>
                        </li>
                    ))
                )}
            </ul>
        </section>
    );
}