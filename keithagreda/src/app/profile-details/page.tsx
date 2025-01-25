import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import keithImg from "./keith-agreda-picture.webp";

const page = () => {
  return (
    <header>
      <div className={`${styles.basicDetails}`}>
        <div className={`${styles.circle}`}>
          <Image
            className={`${styles.imageCircle}`}
            src={keithImg}
            alt="A picture of Keith Agreda"
            layout="responsive"
            width={16}
            height={9}
          />
        </div>
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
