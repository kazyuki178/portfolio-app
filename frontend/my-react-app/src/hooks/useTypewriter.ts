"use client";
import { useEffect, useRef, useState } from 'react';

const shownPages = new Set<string>();

function useTypewriter(
    codeText: string,
    pageKey: string,
    speed: number,
    afterSpeed: number = 10
) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    // 2回目以降かどうかをrefで管理
    const isSecondTime = useRef(shownPages.has(pageKey));
    // 今回使うスピード
    const currentSpeed = isSecondTime.current ? afterSpeed : speed;

    useEffect(() => {
        // codeTextやpageKeyが変わると、表示テキストとインデックスをリセット。
        // 2回目以降かどうかも再判定。
        setDisplayedText("");
        setCurrentIndex(0);
        // stateだとレンダリング時の保持がsetを使っても動作不安定なのでrefを扱う
        isSecondTime.current = shownPages.has(pageKey);
    }, [codeText, pageKey]);

    useEffect(() => {
        if (currentIndex < codeText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + codeText.charAt(currentIndex));
                setCurrentIndex(prev => prev + 1);
            }, currentSpeed);
            return () => clearTimeout(timeout);
        } else if (!isSecondTime.current && codeText.length > 0) {
            shownPages.add(pageKey);
            isSecondTime.current = true;
        }
    }, [currentIndex, codeText, currentSpeed, pageKey]);

    return displayedText;
}

export default useTypewriter;