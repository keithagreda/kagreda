import React, { RefObject } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import keithImg from "./keith-agreda-picture.webp";

type Props = {
  aboutRef: RefObject<HTMLDivElement | null>;
  experienceRef: RefObject<HTMLDivElement | null>;
  projectRef: RefObject<HTMLDivElement | null>;
  activeSection: string;
};

const Page = ({
  aboutRef,
  experienceRef,
  projectRef,
  activeSection,
}: Props) => {
  return (
    <header>
      <div className={styles.basicDetails}>
        <div className={styles.circle} style={{ position: "relative" }}>
          <Image
            className={styles.imageCircle}
            src={keithImg}
            alt="A picture of Keith Agreda"
            layout="responsive"
            width={16}
            height={9}
            style={{ zIndex: 1 }}
          />
          <div className={styles.picFilter}> </div>
        </div>
        <div className="mt-2">
          <div className={styles.details}>
            <h1 className={`${styles.highlightTitle} text-4xl`}>
              Keith Agreda
            </h1>
            <h2 className={`${styles.secondaryTitle} text-xl highlight`}>
              Full-stack Web Developer
            </h2>
          </div>
          <p className="mt-6 text-justify md:text-left">
            I bring structure to the backend and style to the frontend—shaping
            web apps that just make sense.
          </p>
        </div>

        <nav className={`${styles.nav} hidden md:flex mt-7`}>
          <div className={`text-left ${styles.navLinks}`}>
            <div className={`${styles.navLinksItem}`}>
              <button
                className={activeSection === "about" ? "navHighlight " : ""}
                onClick={() =>
                  aboutRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                ABOUT
              </button>
              <div
                className={`${styles.line} ${
                  activeSection === "about" ? styles.navHighLight : ""
                }`}
              ></div>
            </div>
            <div className={`${styles.navLinksItem} `}>
              <button
                className={
                  activeSection === "experience" ? "navHighlight " : ""
                }
                onClick={() =>
                  experienceRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                EXPERIENCE
              </button>
              <div
                className={`${styles.line} ${
                  activeSection === "experience" ? styles.navHighLight : ""
                }`}
              ></div>
            </div>
            <div className={`${styles.navLinksItem}`}>
              <button
                className={activeSection === "project" ? "navHighlight " : ""}
                onClick={() =>
                  projectRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                PROJECT
              </button>
              <div
                className={`${styles.line} ${
                  activeSection === "project" ? styles.navHighLight : ""
                }`}
              ></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Page;
