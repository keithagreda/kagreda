"use client"; // Mark this file as a client component
import React, { useEffect } from "react";

const Blob = () => {
  useEffect(() => {
    const blob = document.getElementById("blob");

    if (blob) {
      document.body.onpointermove = (event) => {
        const { pageX, pageY } = event;
        blob.style.left = `${pageX - 125}px`; // 125 = 250px / 2
        blob.style.top = `${pageY - 125}px`;
      };
    }

    return () => {
      document.body.onpointermove = null;
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
