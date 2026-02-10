import React from "react";
import { Experience } from "./experience/Experience";

interface ExperienceCardProps extends Experience {
  isFocused?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  tenure,
  description,
  name,
  company,
  isFocused,
}) => {
  return (
    <>
      <div className={`group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${isFocused ? "!opacity-100" : ""}`}>
        <div className={`absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#042f42]/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg ${isFocused ? "bg-[#042f42]/30 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg" : "hidden"}`}></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          {tenure}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold leading-tight text-[#00d9a6]">
                {name}
              </span>
              <span className="text-sm font-medium text-slate-400 mt-1">
                {company}
              </span>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-secondary/80">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
