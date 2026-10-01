"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { Project } from "../data/portfolio";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export default function Modal({ isOpen, onClose, project }: ModalProps) {
  const titleId = useId();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !modalRef.current) return;
      const elements = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus({ preventScroll: true });
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#01161e]/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-2xl border border-secondary/10 bg-[#042f42] shadow-2xl"
      >
        <div className="sticky top-0 z-20 flex justify-end bg-[#042f42] px-3 py-2">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-2 text-sm text-secondary hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00d9a6]"
            aria-label="Close project details"
          >
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        {project.imageUrl && (
          <div className="relative aspect-video w-full">
            <Image
              src={project.imageUrl}
              alt={`${project.title} application preview`}
              fill
              sizes="(min-width: 672px) 672px, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="p-5 sm:p-8">
          <p className="mb-2 text-sm text-secondary/70">{project.role}</p>
          <h2 id={titleId} className="font-display text-2xl font-semibold leading-snug text-[#00d9a6]">
            {project.title}
          </h2>
          <p className="mt-3 text-sm text-secondary/70">{project.stack.join(" · ")}</p>
          <p className="mt-6 leading-relaxed text-secondary/90">{project.description}</p>
          <h3 className="mt-6 font-semibold text-secondary">My contribution</h3>
          <p className="mt-2 leading-relaxed">{project.ownership}</p>
          {project.details && <p className="mt-4 leading-relaxed">{project.details}</p>}
          {project.outcome && (
            <p className="mt-6 border-l-2 border-[#00d9a6] pl-4 font-medium text-secondary">{project.outcome}</p>
          )}
          {project.confidential && (
            <p className="mt-6 text-sm text-secondary/60">
              Internal tool under NDA. Screenshots and source code are not public.
            </p>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-[#00d9a6] px-5 py-3 text-sm font-semibold text-[#01161e] hover:bg-[#00f2ba] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9a6]"
            >
              Visit website <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
