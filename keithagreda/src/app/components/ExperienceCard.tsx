import type { Experience } from "../data/portfolio";

interface ExperienceCardProps extends Experience {
  isFocused?: boolean;
}

export default function ExperienceCard({
  tenure,
  highlights,
  name,
  company,
  isFocused,
}: ExperienceCardProps) {
  return (
    <article className={`group relative rounded-md px-4 py-5 transition-colors motion-reduce:transition-none lg:px-6 lg:hover:bg-[#042f42]/30 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] ${isFocused ? "bg-[#042f42]/30 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" : ""}`}>
      <p className="mb-2 text-xs font-medium text-secondary/60">{tenure}</p>
      <h3 className="font-display text-lg font-semibold leading-snug text-[#00d9a6]">{name}</h3>
      <p className="mt-1 text-sm text-secondary/80">{company}</p>
      <ul className="mt-4 list-disc space-y-3 pl-4 text-sm leading-relaxed marker:text-[#00d9a6]/60">
        {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>
    </article>
  );
}
