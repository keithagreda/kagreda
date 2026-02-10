import React, { useState } from "react";
import Image from "next/image"; // Add this import
import style from "./ProjectCard.module.css";
import Modal from "./Modal";

export interface ProjectDto {
  id: number;
  title: string;
  imageUrl?: string | null;
  description?: string | null;
  link?: string | null;
}

interface ProjectCardProps extends ProjectDto {
  isFocused?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageUrl,
  description,
  link,
  isFocused,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const CardContent = (
    <div
      className={`group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer ${isFocused ? "!opacity-100" : ""}`}
      onClick={() => setIsModalOpen(true)}
    >
      <div className={`absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#042f42]/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg ${isFocused ? "bg-[#042f42]/30 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg" : "hidden"}`}></div>

      <div className="z-10 sm:col-span-2">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={112} // Adjusted height for better aspect ratio
            quality={60}
            loading="lazy"
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 object-cover"
          />
        ) : (
          <div className="flex aspect-video w-full items-center justify-center rounded border-2 border-slate-200/10 bg-slate-200/5 transition group-hover:border-slate-200/30 sm:translate-y-1">
            <span className="font-display text-xs font-bold tracking-widest text-slate-500">NDA</span>
          </div>
        )}
      </div>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <span className="font-display text-base font-semibold leading-tight text-[#00d9a6] flex items-center gap-1">
              {title}
              {link && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </span>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal text-secondary/80 line-clamp-2 md:line-clamp-none">
          {description ?? "No description available."}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {CardContent}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description ?? "No description available."}
        imageUrl={imageUrl}
        link={link}
      />
    </>
  );
};

export default ProjectCard;