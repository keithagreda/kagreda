import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <header>
      <div
        className={`${styles.basicDetails} px-2 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24`}
      >
        <div className={`${styles.circle}`}></div>
        <div className="mt-2">
          <h1 className="text-4xl font-bold">Keith Agreda</h1>
          <h2 className="text-xl">Full-stack Web Developer</h2>
          <p className="mt-6">
            I create robust backends and polished frontends for modern web apps.
          </p>
        </div>
        <nav className="hidden md:flex mt-7">
          <ul className="text-left">
            <li>ABOUT</li>
            <li>EXPERIENCE</li>
            <li>PROJECTS</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default page;
