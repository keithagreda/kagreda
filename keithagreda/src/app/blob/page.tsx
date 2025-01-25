"use client"; // Mark this file as a client component
import React, { useEffect } from "react";

export function Blob() {
  useEffect(() => {
    const blob = document.getElementById("blob");

    // Ensure that the blob element is found before trying to move it
    if (blob) {
      document.body.onpointermove = (event) => {
        const { clientX, clientY } = event;
        blob.style.left = `${clientX}px`;
        blob.style.top = `${clientY}px`;
      };
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      document.body.onpointermove = null;
    };
  }, []); // Empty dependency array means this runs once after the component mounts

  return (
    <div
      id="blob"
      style={{
        position: "absolute",
        width: "50px",
        height: "50px",
        backgroundColor: "red",
        borderRadius: "50%",
        pointerEvents: "none", // This ensures the pointer doesn't interact with the blob
      }}
    />
  );
}

const Page = () => {
  return <Blob />;
};

export default Page;
