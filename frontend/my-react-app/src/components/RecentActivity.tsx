import type { QiitaItem } from "../interfaces/QiitaItem";
import { getQiitaItems } from "../lib/qiita";

// 12時間ごとに再生成
export const revalidate = 60 * 60 * 12;
const url: string = "https://qiita.com/api/v2/users/kazyuki178/items?page=1&per_page=5";



export default async function RecentActivity() {
    const items: QiitaItem[] = await getQiitaItems();

    // 更新日でソート
    const sortedItems = items.sort(
        (a: QiitaItem, b: QiitaItem) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

    return (
        <section>
            <h2 className="text-center text-lg mb-14">最近の投稿</h2>
            <ul className="flex flex-col items-center">
                {sortedItems.length === 0 ? (
                    <li>記事がありません</li>
                ) : (
                    sortedItems.map((item: QiitaItem) => (
                        <li
                            key={item.id}
                            className="mb-9 flex items-center justify-center bg-slate-100/60 backdrop-blur-md border border-white/30 shadow-2xl rounded-lg w-[350px] sm:w-[500px] md:w-[700px] h-24 p-3 transition-transform duration-300 hover:scale-105"
                        >
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <p className="text-center pb-2 text-sm text-gray-500">
                                    {new Date(item.updated_at).toLocaleDateString("ja-JP", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                    })}{" "}
                                    更新
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
