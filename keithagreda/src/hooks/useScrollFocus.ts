"use client";

import { useState, useEffect, RefObject } from "react";

export function useScrollFocus(containerRef: RefObject<HTMLElement | null>, itemSelector: string) {
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const items = containerRef.current.querySelectorAll(itemSelector);
            const viewportCenter = window.innerHeight / 2;

            let closestIndex = -1;
            let minDistance = Infinity;

            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                const itemCenter = rect.top + rect.height / 2;
                const distance = Math.abs(viewportCenter - itemCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            // Only set active if the closest item is actually within a reasonable part of the center
            // or if we are on a smaller screen where hover isn't natural.
            if (window.innerWidth < 1024) {
                setActiveIndex(closestIndex);
            } else {
                setActiveIndex(-1); // Disable focus effect on desktop to let hover handle it
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [containerRef, itemSelector]);

    return activeIndex;
}
