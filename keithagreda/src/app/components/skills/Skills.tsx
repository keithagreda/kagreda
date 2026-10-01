import { skills } from "../../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-8 px-4 lg:px-6">
      <h2 id="skills-heading" className="mb-6 font-display text-2xl font-semibold text-secondary">
        Skills
      </h2>
      <dl className="divide-y divide-secondary/10">
        {skills.map((skill) => (
          <div key={skill.name} className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="font-medium text-secondary">{skill.name}</dt>
            <dd className="min-w-0 text-sm leading-relaxed">{skill.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
