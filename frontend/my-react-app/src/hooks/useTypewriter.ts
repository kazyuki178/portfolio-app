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

    // nameのときは常にspeed、それ以外は2回目以降判定
    const isAlwaysNormalSpeed:boolean = pageKey === "name";

    // isAlwaysNormalSpeedがtrue（＝pageKeyが"name"）なら、falseを初期値にする（初回表示扱い）
    // isSecondTimeはpageKeyがtrueならfalseで初期表示、そうじゃないならset内を見てなければ新規(false)、あれば表示済み(true)として扱う
    const isSecondTime = useRef(shownPages.has(pageKey));

    const currentSpeed = isAlwaysNormalSpeed
        ? speed
        : (isSecondTime.current ? afterSpeed : speed);

    useEffect(() => {
        setDisplayedText("");
        setCurrentIndex(0);
        // nameのときは2回目判定しない
        isSecondTime.current = isAlwaysNormalSpeed ? false : shownPages.has(pageKey);
    }, [codeText, pageKey, isAlwaysNormalSpeed]);

    useEffect(() => {
        if (currentIndex < codeText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + codeText.charAt(currentIndex));
                setCurrentIndex(prev => prev + 1);
            }, currentSpeed);
            return () => clearTimeout(timeout);
        } else if (!isAlwaysNormalSpeed && !isSecondTime.current && codeText.length > 0) {
            shownPages.add(pageKey);
            isSecondTime.current = true;
        }
    }, [currentIndex, codeText, currentSpeed, pageKey, isAlwaysNormalSpeed]);

    return displayedText;
}

export default useTypewriter;