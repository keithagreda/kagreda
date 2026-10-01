import { useRef } from "react";
import ExperienceCard from "../ExperienceCard";
import { useScrollFocus } from "@/hooks/useScrollFocus";
import { experiences } from "../../data/portfolio";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndex = useScrollFocus(containerRef, ".experience-item");

  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-8">
      <h2 id="experience-heading" className="mb-6 px-4 font-display text-2xl font-semibold text-secondary lg:px-6">
        Experience
      </h2>
      <div ref={containerRef} className="group/list flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <div key={experience.tenure} className="experience-item">
            <ExperienceCard {...experience} isFocused={activeIndex === index} />
          </div>
        ))}
      </div>
    </section>
  );
}
