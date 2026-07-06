"use client"; // Mark this file as a client component
import React, { useEffect, useRef } from "react";

const Blob = () => {
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const blob = document.getElementById("blob");

    if (!blob || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = window.requestAnimationFrame(() => {
        const { pageX, pageY } = event;
        blob.style.left = `${pageX - 125}px`;
        blob.style.top = `${pageY - 125}px`;
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      id="blob"
      style={{
        position: "absolute",
        background:
          "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 91%)",
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: -2,
      }}
    />
  );
};

const Page = () => {
  return <Blob />;
};

export default Page;
