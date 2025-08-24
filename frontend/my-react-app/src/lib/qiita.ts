// App Router の ISR の動き（簡潔版）
// 初回アクセス → HTML を生成して返す（Vercel CDN にキャッシュ）
// 再アクセス（revalidate 内） → キャッシュ返却、API は叩かれない
// 再アクセス（revalidate 経過後） → 最初のアクセスで再生成、キャッシュ更新
// ポイント → ページ単位でキャッシュ、ユーザーごとに API は叩かれない

import { QiitaItem } from "../interfaces/QiitaItem";



// 12時間ごとに生成
export const revalidate = 60 * 60 * 12;
const url: string = "https://qiita.com/api/v2/users/kazyuki178/items?page=1&per_page=5";



export const getQiitaItems = async (): Promise<QiitaItem[]> => {
    // revalidateで ISR のキャッシュ管理下に入る
    const res = await fetch(url, { next: { revalidate } });
    const items: QiitaItem[] = await res.json();
    return items;
};