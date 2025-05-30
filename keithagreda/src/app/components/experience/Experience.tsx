import React, { forwardRef } from "react";
import ExperienceCard from "../ExperienceCard";

export interface Experience {
  tenure: string;
  name: string;
  description: string;
}

const exps: Experience[] = [
  {
    tenure: "Feb 2025 - Present ",
    name: "Mid Software Developer",
    description:
      "Acted as the technical lead for a team of developers during the development of a custom HR System for the HR Deparment, reducing manual tasks and accelerating the hiring process",
  },
  {
    tenure: "Aug 2023 - Feb 2025",
    name: "Junior Software Developer",
    description:
      "Optimized legacy code, reducing execution time from 6 hours to 10-30 minutes, significantly improving system performance and efficiency. Collaborated with cross-functional teams to address system bottlenecks and implement process improvements",
  },
  {
    tenure: "May 2022 - July 2022",
    name: "Intern",
    description:
      "Developed a Visitor Management System to support health protocols during the pandemic, enabling efficient visitor tracking and promoting social distancing.",
  },
];

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col md:gap-4 px-1 md:px-0">
      <h1 className="text-xl font-semibold">Experience</h1>
      {exps.map((exp, index) => (
        <ExperienceCard
          key={index}
          tenure={exp.tenure}
          description={exp.description}
          name={exp.name}
        />
      ))}
    </div>
  );
});

Experience.displayName = "Experience";

export default Experience;
