import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <header>
      <div className={`${styles.basicDetails}`}>
        <div className={`${styles.circle}`}></div>
        <div className="mt-2">
          <h1 className="text-4xl font-bold">Keith Agreda</h1>
          <h2 className="text-xl">Full-stack Web Developer</h2>
          <p className="mt-6">
            I create robust backends and polished frontends for modern web apps.
          </p>
        </div>
        <nav className="flex justify-center items-center mt-7">
          <ul>
            <li>About</li>
            <li>Experiences</li>
            <li>Projects</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default page;
