"use client";
import { useEffect, useState } from 'react';

function useTypewriter(codeText:string, speed:number) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < codeText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + codeText.charAt(currentIndex));
                setCurrentIndex(currentIndex + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, codeText, speed]);

    return displayedText;
}

export default useTypewriter;