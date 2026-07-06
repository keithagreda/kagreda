"use client";

import React, { useEffect, useId, useRef } from "react";
import Image from "next/image";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    imageUrl?: string | null;
    link?: string | null;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
    imageUrl,
    link,
}) => {
    const titleId = useId();
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previousActiveElementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        previousActiveElementRef.current = document.activeElement as HTMLElement | null;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
                return;
            }

            if (e.key !== "Tab" || !modalRef.current) return;

            const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (!firstElement || !lastElement) return;

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
        window.setTimeout(() => closeButtonRef.current?.focus(), 0);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
            previousActiveElementRef.current?.focus();
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-[#01161e]/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Content */}
            <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-[#042f42] border border-slate-200/10 shadow-2xl animate-in zoom-in-95 fade-in duration-300"
            >
                <button
                    ref={closeButtonRef}
                    onClick={onClose}
                    className="absolute right-4 top-4 z-20 rounded-full p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d9a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#042f42]"
                    aria-label="Close modal"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col">
                    {imageUrl ? (
                        <div className="relative aspect-video w-full overflow-hidden">
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className="object-cover"
                                quality={90}
                                loading="lazy"
                            />
                        </div>
                    ) : (
                        <div className="flex aspect-video w-full items-center justify-center bg-slate-200/5">
                            <span className="font-display text-2xl font-bold tracking-widest text-slate-500/50 uppercase">NDA Restricted</span>
                        </div>
                    )}

                    <div className="p-8">
                        <h2 id={titleId} className="font-display text-2xl font-bold text-[#00d9a6] mb-4">
                            {title}
                        </h2>
                        <p className="text-secondary/80 leading-relaxed text-sm lg:text-base mb-8">
                            {description}
                        </p>

                        {link && (
                            <div className="flex flex-col gap-4">
                                <div className="h-px w-full bg-slate-200/10" />
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500 font-medium">Want to see more?</span>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 rounded-full bg-[#00d9a6] px-6 py-2.5 text-sm font-semibold text-[#01161e] transition-all hover:scale-105 hover:bg-[#00f2ba] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d9a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#042f42]"
                                    >
                                        Open Live Project
                                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
