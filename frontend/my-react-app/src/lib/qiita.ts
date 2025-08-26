// lib/qiita.ts
import type { QiitaItem } from "../interfaces/QiitaItem";

// 12時間ごとに ISR で再生成
// 
export const revalidate = 60 * 60 * 12;
const url: string = "https://qiita.com/api/v2/users/kazyuki178/items?page=1&per_page=5";

/**
 * Qiita の最新記事を取得（認証なし、公開記事のみ）
 */
export const getQiitaItems = async (): Promise<QiitaItem[]> => {
    try {
        const res = await fetch(url, {
            next: { revalidate }, // ISR キャッシュ管理
        });

        if (!res.ok) {
            console.error("Qiita API エラー:", res.status);
            return [];
        }

        const data = await res.json();
        return Array.isArray(data) ? data : [];
    } catch (err) {
        console.error("Qiita API fetch エラー:", err);
        return [];
    }
};
