"use client";
import ProfileDetail from "./profile-details/ProfileDetail";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Project from "./components/projects/Project";
import Blob from "./blob/page";
import { useEffect, useRef, useState } from "react";

function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= breakpoint);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, [breakpoint]);

  return isDesktop;
}

export default function Home() {
  const isDesktop = useIsDesktop();
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const scrollableRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
      const handleScroll = () => {
      const sections = [
        { name: "about", ref: aboutRef.current },
        { name: "experience", ref: experienceRef.current },
        { name: "project", ref: projectRef.current },
      ];

      let current = "about";
      let maxVisibility = 0;

      sections.forEach((section) => {
        if (section.ref) {
          const rect = section.ref.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(0, -rect.top);
          const visibleBottom = Math.min(rect.height, viewportHeight - rect.top);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibility = visibleHeight / rect.height;
          
          // Use the section with the highest visibility percentage
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            current = section.name;
          }
        }
      });

      setActiveSection(current);
    };

    const scrollable = scrollableRef.current;
    if (scrollable) {
      scrollable.addEventListener("scroll", handleScroll, { passive: true });
    }
    // Also listen to window scroll for mobile
    if (!isDesktop) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    // Initial check
    handleScroll();

    return () => {
      if (scrollable) {
        scrollable.removeEventListener("scroll", handleScroll);
      }
      if (!isDesktop) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isDesktop]);

  return (
    <>
      <div className="scrollbar-hidden">
        {isDesktop && (
          <>
            <Blob />
            <div
              id="blur"
              style={{
                position: "fixed",
                height: "100%",
                width: "100%",
                zIndex: -2,
                backdropFilter: "blur(200px)",
              }}
            >
              <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 py-12 font-sans md:py-16 lg:py-0">
                <main className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Left section (Profile) */}
                  <div className="w-full pt-0 pb-0 md:pt-12 md:pb-12 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                    <ProfileDetail
                      aboutRef={aboutRef}
                      experienceRef={experienceRef}
                      projectRef={projectRef}
                      activeSection={activeSection}
                    />
                  </div>

                  {/* Right section (Content) */}
                  <div
                    ref={scrollableRef}
                    className="w-full flex flex-col gap-20 pt-0 pb-0 md:pt-12 md:pb-12 lg:w-[52%] md:max-h-screen md:overflow-auto scrollbar-hidden"
                  >
                    <About ref={aboutRef} />
                    <Experience ref={experienceRef} />
                    <Project ref={projectRef} />
                  </div>
                </main>
              </div>
            </div>
          </>
        )}
        {!isDesktop && (
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 py-12 font-sans md:py-16 lg:py-0">
            <main className="flex flex-col md:flex-row gap-8 items-start">
              {/* Left section (Profile) */}
              <div className="w-full pt-0 pb-0 md:pt-12 md:pb-12 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                <ProfileDetail
                  aboutRef={aboutRef}
                  experienceRef={experienceRef}
                  projectRef={projectRef}
                  activeSection={activeSection}
                />
              </div>

              {/* Right section (Content) */}
              <div
                ref={scrollableRef}
                className="w-full flex flex-col gap-20 pt-0 pb-0 md:pt-12 md:pb-12 lg:w-[52%] md:max-h-screen md:overflow-auto scrollbar-hidden"
              >
                <About ref={aboutRef} />
                <Experience ref={experienceRef} />
                <Project ref={projectRef} />
              </div>
            </main>
          </div>
        )}
      </div>
    </>
  );
}
