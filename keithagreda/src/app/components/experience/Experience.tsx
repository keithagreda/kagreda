import React, { forwardRef, useRef } from "react";
import ExperienceCard from "../ExperienceCard";
import { useScrollFocus } from "@/hooks/useScrollFocus";

export interface Experience {
  tenure: string;
  name: string;
  description: string;
}

const exps: Experience[] = [
  {
    tenure: "Feb 2025 - Present ",
    name: "Brigada Group of Companies - Mid Software Developer",
    description:
      "Acted as the technical lead for a team of developers during the development of a custom HR System for the HR Deparment, reducing manual HR tasks by 40%+ and accelerating the hiring process",
  },
  {
    tenure: "Aug 2023 - Feb 2025",
    name: "Brigada Group of Companies - Junior Software Developer",
    description:
      "Optimized legacy code, reducing execution time from 6 hours to 10-30 minutes, significantly improving system performance and efficiency. Collaborated with cross-functional teams to address system bottlenecks and implement process improvements",
  },
  {
    tenure: "May 2022 - July 2022",
    name: "Brigada Group of Companies - Intern",
    description:
      "Developed a Visitor Management System to support health protocols during the pandemic, enabling efficient visitor tracking and promoting social distancing.",
  },
];

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndex = useScrollFocus(containerRef, ".experience-item");

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      className={`group/list flex flex-col gap-12 md:gap-20 px-1 md:px-0 md:pl-8 lg:pl-12 ${activeIndex !== -1 ? "mobile-active-list" : ""}`}
    >
      <h1 className="text-xl font-semibold">Experience</h1>
      {exps.map((exp, index) => (
        <div key={index} className="experience-item">
          <ExperienceCard
            tenure={exp.tenure}
            description={exp.description}
            name={exp.name}
            isFocused={activeIndex === index}
          />
        </div>
      ))}
    </div>
  );
});

Experience.displayName = "Experience";

export default Experience;
