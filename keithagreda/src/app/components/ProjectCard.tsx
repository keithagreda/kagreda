import { useCallback, useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import type { Project } from "../data/portfolio";

interface ProjectCardProps extends Project {
  isFocused?: boolean;
}

export default function ProjectCard({ isFocused, ...project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <article className={`group relative min-w-0 rounded-md px-4 py-5 transition-colors motion-reduce:transition-none lg:px-6 lg:hover:bg-[#042f42]/30 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] ${isFocused ? "bg-[#042f42]/30 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" : ""}`}>
        {project.featured && project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={`${project.title} application preview`}
            width={640}
            height={360}
            sizes="(min-width: 1280px) 580px, (min-width: 1024px) 50vw, 90vw"
            className="mb-5 aspect-video w-full rounded-md border border-secondary/10 object-cover"
          />
        )}
        <p className="mb-2 text-xs font-medium text-secondary/60">{project.role}</p>
        <h3 className="font-display text-xl font-semibold leading-snug text-[#00d9a6]">
          {project.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-secondary/70">
          <span className="sr-only">Technology stack: </span>{project.stack.join(" · ")}
        </p>
        <p className="mt-4 text-sm leading-relaxed">{project.description}</p>
        {project.featured && (
          <p className="mt-3 text-sm leading-relaxed text-secondary/80">{project.ownership}</p>
        )}
        {project.details && <p className="mt-3 text-sm leading-relaxed">{project.details}</p>}
        {project.outcome && (
          <p className="mt-4 border-l-2 border-[#00d9a6]/60 pl-3 text-sm font-medium text-secondary">
            {project.outcome}
          </p>
        )}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            aria-haspopup="dialog"
            aria-label={`View details for ${project.title}`}
            className="rounded-sm text-secondary underline decoration-secondary/30 underline-offset-4 hover:decoration-[#00d9a6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9a6]"
          >
            Project details
          </button>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} (opens in a new tab)`}
              className="rounded-sm text-[#00d9a6] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9a6]"
            >
              Visit website <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </article>
      <Modal isOpen={isModalOpen} onClose={closeModal} project={project} />
    </>
  );
}
