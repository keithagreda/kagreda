"use client";

import { useEffect, useState } from "react";
import ProfileDetail from "./profile-details/ProfileDetail";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Project";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Blob from "./blob/page";
import { sections } from "./data/portfolio";
import styles from "./page.module.css";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const updateDesktop = () => setIsDesktop(media.matches);
    updateDesktop();
    media.addEventListener("change", updateDesktop);
    return () => media.removeEventListener("change", updateDesktop);
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      let current: string = "about";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = section.id;
        }
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = "contact";
      }
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };
    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <div>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-secondary focus:px-4 focus:py-2 focus:text-[#01161e]">
        Skip to content
      </a>
      {isDesktop && (
        <>
          <Blob />
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-[2] backdrop-blur-[200px]" />
        </>
      )}
      <div className="mx-auto grid min-h-screen max-w-screen-xl grid-cols-1 items-start gap-16 px-4 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12 lg:px-12 lg:py-12">
        <div className={styles.profileColumn}>
          <ProfileDetail activeSection={activeSection} />
        </div>
        <main id="content" tabIndex={-1} className="flex min-w-0 flex-col gap-16 pb-12 outline-none lg:gap-20">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}
