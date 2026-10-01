import { useRef } from "react";
import ProjectCard from "../ProjectCard";
import { useScrollFocus } from "@/hooks/useScrollFocus";
import { projects } from "../../data/portfolio";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndex = useScrollFocus(containerRef, ".project-item");
  const featured = projects.filter((project) => project.featured);
  const additional = projects.filter((project) => !project.featured);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-8">
      <h2 id="projects-heading" className="mb-6 px-4 font-display text-2xl font-semibold text-secondary lg:px-6">
        Featured projects
      </h2>
      <div ref={containerRef} className="group/list">
        <div className="flex flex-col gap-6">
          {featured.map((project, index) => (
            <div key={project.id} className="project-item">
              <ProjectCard {...project} isFocused={activeIndex === index} />
            </div>
          ))}
        </div>
        <h3 className="mb-4 mt-12 px-4 font-display text-lg font-medium text-secondary lg:px-6">
          More projects
        </h3>
        <div className="flex flex-col gap-4">
          {additional.map((project, index) => (
            <div key={project.id} className="project-item">
              <ProjectCard {...project} isFocused={activeIndex === featured.length + index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
