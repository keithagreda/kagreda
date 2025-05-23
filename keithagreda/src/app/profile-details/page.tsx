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
          <div className={`${styles.details}`}>
            <h1 className={`${styles.highlightTitle} text-4xl`}>
              Keith Agreda
            </h1>
            <h2 className={`${styles.secondaryTitle} text-xl`}>
              Full-stack Web Developer
            </h2>
          </div>
          <p className="mt-6 text-justify md:text-left">
            I bring structure to the backend and style to the frontend—shaping
            web apps that just make sense.
          </p>
        </div>
        <nav className="hidden md:flex mt-7">
          <ul className={`text-left ${styles.navLinks}`}>
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
