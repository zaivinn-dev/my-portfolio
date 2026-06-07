"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Project } from '../data/portfolio';

interface Props {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, open, onClose }: Props) {
  const [idx, setIdx] = useState(0);

  const normalizeSrc = (s?: string) => {
    if (!s) return s ?? '';
    if (s.startsWith('http://') || s.startsWith('https://') || s.startsWith('/')) return s;
    return `/${s}`;
  };

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIdx((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowRight' && project?.screenshots) {
        setIdx((i) => Math.min((project.screenshots?.length ?? 1) - 1, i + 1));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose, project]);

  if (!open || !project) return null;

  const screenshots = project.screenshots ?? [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-4xl bg-white dark:bg-zinc-950 rounded-3xl border border-gray-150 dark:border-zinc-900 shadow-2xl overflow-y-auto flex flex-col max-h-[92vh]">
        
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100/80 hover:bg-gray-200 dark:bg-zinc-900/80 dark:hover:bg-zinc-800 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm border border-gray-200/20 dark:border-zinc-800/20"
        >
          ✕
        </button>

        {/* Top Section: Media Showcase */}
        <div className="w-full p-6 sm:p-8 flex flex-col justify-center bg-gray-50/50 dark:bg-zinc-900/10 border-b border-gray-150 dark:border-zinc-900">
          {screenshots.length > 0 ? (
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800/50 shadow-inner">
                <Image
                  src={normalizeSrc(screenshots[idx])}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  priority
                  className="object-contain"
                />
                
                {/* Image Count Indicator */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/60 dark:bg-zinc-950/80 backdrop-blur-sm text-white dark:text-zinc-200 font-mono text-[10px] tracking-wider">
                  {idx + 1} / {screenshots.length}
                </div>

                {/* Left Arrow Button */}
                <button
                  onClick={() => setIdx((i) => Math.max(0, i - 1))}
                  disabled={idx === 0}
                  aria-label="Previous screenshot"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 dark:bg-zinc-900/90 text-gray-800 dark:text-zinc-200 shadow-md border border-gray-200/50 dark:border-zinc-800/50 transition-all hover:scale-105 active:scale-95 disabled:opacity-0 disabled:pointer-events-none cursor-pointer z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={() => setIdx((i) => Math.min(screenshots.length - 1, i + 1))}
                  disabled={idx === screenshots.length - 1}
                  aria-label="Next screenshot"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 dark:bg-zinc-900/90 text-gray-800 dark:text-zinc-200 shadow-md border border-gray-200/50 dark:border-zinc-800/50 transition-all hover:scale-105 active:scale-95 disabled:opacity-0 disabled:pointer-events-none cursor-pointer z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Thumbnails list */}
              {screenshots.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1 shrink-0 no-scrollbar">
                  {screenshots.map((s: string, i: number) => (
                    <div
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`relative flex-none w-24 aspect-video rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                        i === idx 
                          ? 'ring-2 ring-blue-500/50 border-blue-500 scale-95' 
                          : 'border-transparent opacity-65 hover:opacity-100 hover:scale-95'
                      }`}
                    >
                      <Image src={normalizeSrc(s)} alt={`thumbnail ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="w-full aspect-[16/10] rounded-2xl flex items-center justify-center bg-gray-100 dark:bg-zinc-900 text-gray-400 text-sm border border-dashed border-gray-250 dark:border-zinc-850">
              No screenshots available
            </div>
          )}
        </div>

        {/* Bottom Section: Project Details */}
        <div className="w-full p-6 sm:p-8 flex flex-col">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-2 leading-relaxed">
                {project.subtitle}
              </p>
            )}
          </div>

          <div className="mt-5 flex-1 space-y-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            {project.stack && project.stack.length > 0 && (
              <div className="pt-5 border-t border-gray-100 dark:border-zinc-900">
                <h4 className="text-[10px] font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500 mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((s: string) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-zinc-800/50"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Links */}
            {project.links && project.links.length > 0 && (
              <div className="pt-5 border-t border-gray-100 dark:border-zinc-900">
                <h4 className="text-[10px] font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500 mb-3">
                  Links
                </h4>
                <div className="flex flex-col gap-2">
                  {project.links.map((l: { label: string; href: string }) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors w-max"
                    >
                      <span>{l.label}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
