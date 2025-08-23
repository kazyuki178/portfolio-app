// app/components/RecentActivity.tsx
import { getQiitaItems } from '../lib/qiita';

export default async function RecentActivity() {
    let items = await getQiitaItems(); // サーバー側で await
    items.sort(
        (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

    return (
        <section>
            <h2 className="text-center text-lg mb-14">最近の投稿</h2>

            <ul className='flex flex-col items-center '>
                {items.map(item => (
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
                ))}
            </ul>
        </section>
    );
}
