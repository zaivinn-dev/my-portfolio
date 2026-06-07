'use client';

import Image from 'next/image';
import { useState, useCallback, useEffect, useRef } from 'react';
import { portfolioData, Project, ExperienceItem, CertificationItem } from './data/portfolio';
import { ThemeToggle } from './components/ThemeToggle';
import ProjectModal from './components/ProjectModal';

export default function Home() {
  const data = portfolioData;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const scrollNext = useCallback(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollBy({ left: 280, behavior: 'smooth' });
    }
  }, []);

  const scrollPrev = useCallback(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollBy({ left: -280, behavior: 'smooth' });
    }
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, closeLightbox]);

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans antialiased">
      {/* Top action row */}
      <div className="max-w-5xl mx-auto px-6 pt-6 flex justify-end">
        <ThemeToggle />
      </div>

      {/* Main Core Layout Grid Blocks */}
      <main className="max-w-5xl mx-auto px-6 pt-6 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Left Side Profile Tier */}
        <div className="lg:col-span-2 space-y-12">
          <section className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start text-center sm:text-left w-full">
            {data.profile.avatarUrl ? (
              <Image
                src={data.profile.avatarUrl}
                alt={data.profile.fullName}
                width={192}
                height={192}
                unoptimized
                priority
                sizes="(min-width: 640px) 192px, 128px"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl object-cover shadow-md shrink-0 bg-gray-50 dark:bg-zinc-900"
              />
            ) : (
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl sm:text-4xl md:text-5xl font-extrabold shadow-md shrink-0">
                {data.profile.avatarInitials}
              </div>
            )}
            <div className="flex-1 min-w-0 space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                {data.profile.fullName}
              </h1>

              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">📍 {data.profile.location}</p>
                <p className="text-sm sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1.5 leading-snug">
                  {data.profile.headline}
                </p>
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
                {data.profile.scheduleLink && (
                  <a
                    href={data.profile.scheduleLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold text-white transition hover:bg-blue-700"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Schedule Call
                  </a>
                )}
                <a
                  href={data.socialLinks.email}
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-zinc-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-semibold text-[10px] sm:text-xs hover:bg-gray-100 dark:hover:bg-zinc-900 transition"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight">About</h2>
            <div className="text-gray-600 dark:text-gray-300 space-y-4 text-sm leading-relaxed">
              {data.about.map((paragraph: string, index: number) => <p key={index}>{paragraph}</p>)}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight">Tech Stack</h2>
            <div className="space-y-4">
              {data.techStack.map((category) => (
                <div key={category.title}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-[#1e1e1e] border border-gray-200 dark:border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Block */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">Projects</h2>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">{data.projects.length} projects</span>
            </div>
            <div className="space-y-3">
              {(showAllProjects ? data.projects : data.projects.slice(0, 3)).map((project: Project, idx: number) => (
                <div
                  key={idx}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelectedProject(project); setIsProjectModalOpen(true); } }}
                  onClick={() => { setSelectedProject(project); setIsProjectModalOpen(true); }}
                  className="group relative p-4 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#1a1a1a] hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer"
                >
                  {/* Accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 dark:bg-blue-600 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  <div className="flex items-start gap-3">
                    {/* Number badge */}
                    <span className="shrink-0 w-6 h-6 mt-0.5 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 text-[10px] font-bold text-gray-500 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {idx + 1}
                    </span>

                    <div className="flex-1 min-w-0 space-y-2">
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-snug group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {project.stack.map((s: string) => (
                          <span
                            key={s}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-700"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {data.projects.length > 3 && (
              <button
                onClick={() => setShowAllProjects(prev => !prev)}
                className="w-full mt-1 py-2 px-4 rounded-xl border border-gray-300 dark:border-zinc-800 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-900 transition cursor-pointer text-center focus:outline-none"
              >
                {showAllProjects ? "Show Less ↑" : `View All ${data.projects.length} Projects ↓`}
              </button>
            )}
          </div>
        </div>

        {/* Right Side Experience Timeline Module */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight">Experience</h2>
            <div className="relative pl-6 border-l-2 border-gray-200 dark:border-zinc-800 space-y-8 ml-2">
              {data.experiences.map((exp: ExperienceItem, idx: number) => (
                <div key={idx} className="relative group cursor-default">
                  {exp.current ? (
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full border-2
                      bg-gray-900 dark:bg-white
                      border-gray-900 dark:border-white
                      scale-110
                      transition-all duration-200 ease-in-out">
                    </span>
                  ) : (
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full border-2
                      bg-gray-50 dark:bg-[#121212]
                      border-gray-300 dark:border-zinc-700
                      group-hover:bg-gray-900 dark:group-hover:bg-white
                      group-hover:border-gray-900 dark:group-hover:border-white
                      group-hover:scale-125
                      transition-all duration-200 ease-in-out">
                    </span>
                  )}
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-snug">{exp.role}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{exp.institution}</p>
                    </div>
                    {exp.duration && <span className="text-xs font-mono text-gray-600 dark:text-gray-400">{exp.duration}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Mid-Tier Grid Layer: Pure Recent Certifications Segment */}
      <section className="max-w-5xl mx-auto px-6 pb-16 border-t border-gray-200 dark:border-zinc-900 pt-12">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-xl font-bold tracking-tight">Recent Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.certifications.length > 0 ? (
              data.certifications.map((cert: CertificationItem, idx: number) => (
                <div key={idx} className="p-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#1e1e1e] flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-md hover:border-gray-300 dark:hover:border-zinc-700">
                  <span className="font-bold text-sm text-gray-900 dark:text-white">{cert.title}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{cert.issuer}</span>
                </div>
              ))
            ) : (
              <div className="p-5 col-span-2 rounded-xl border border-dashed border-gray-300 dark:border-zinc-800 text-center text-xs text-gray-400 italic">
                No certifications added yet. Populate your credentials inside your data file!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {data.galleryImages && data.galleryImages.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 pb-16 border-t border-gray-200 dark:border-zinc-900 pt-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight">Gallery</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Highlights from projects, events, and experiences</p>
            </div>

            {/* Horizontal Scrolling Single Lane Container */}
            <div className="relative group">
              {/* Left Button for Previous Image (Scrolls Lane Left) */}
              <button
                onClick={scrollPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-900 text-gray-900 dark:text-white transition-all duration-200 shadow-lg border border-gray-200 dark:border-zinc-800 cursor-pointer backdrop-blur-sm focus:outline-none z-10"
                aria-label="Scroll gallery left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar pb-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {data.galleryImages.map((src: string, idx: number) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className="relative aspect-square w-48 sm:w-60 rounded-2xl overflow-hidden border border-gray-250 dark:border-zinc-850 bg-gray-100 dark:bg-[#1e1e1e] shrink-0 shadow-sm cursor-pointer group/image"
                  >
                    <Image
                      src={src}
                      alt={`Gallery image ${idx + 1}`}
                      fill
                      sizes="19rem"
                      className="object-cover transition-transform duration-300 ease-in-out"
                    />
                    {/* Hover overlay for a subtle darkening effect (removed zoom icon) */}
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>

              {/* Right Button for Next Image (Scrolls Lane Right) */}
              <button
                onClick={scrollNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-900 text-gray-900 dark:text-white transition-all duration-200 shadow-lg border border-gray-200 dark:border-zinc-800 cursor-pointer backdrop-blur-sm focus:outline-none z-10"
                aria-label="Scroll gallery right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Social Links / Connect Footer */}
      <footer id="contact" className="max-w-5xl mx-auto px-6 pb-16 border-t border-gray-200 dark:border-zinc-900 pt-12">
        <div className="space-y-6 text-center">
          <h2 className="text-xl font-bold tracking-tight">Let&apos;s Connect</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Feel free to reach out through any of these platforms. I&apos;m always open to new opportunities and conversations.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">

            {/* LinkedIn */}
            {data.socialLinks.linkedin && (
              <a
                href={data.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-[#1e1e1e] hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all duration-200"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}

            {/* GitHub */}
            {data.socialLinks.github && (
              <a
                href={data.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-[#1e1e1e] hover:bg-gray-900 hover:border-gray-900 dark:hover:bg-white dark:hover:border-white transition-all duration-200"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            )}

            {/* Email */}
            {data.socialLinks.email && (
              <a
                href={data.socialLinks.email}
                aria-label="Email"
                className="group w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-[#1e1e1e] hover:bg-emerald-600 hover:border-emerald-600 dark:hover:bg-emerald-600 dark:hover:border-emerald-600 transition-all duration-200"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            )}

            {/* Instagram */}
            {data.socialLinks.instagram && (
              <a
                href={data.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-[#1e1e1e] hover:bg-pink-600 hover:border-pink-600 dark:hover:bg-pink-600 dark:hover:border-pink-600 transition-all duration-200"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            )}

          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400 dark:text-gray-600 pt-4">
            © {new Date().getFullYear()} {data.profile.fullName}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Project details modal */}
      <ProjectModal
        key={selectedProject?.title ?? 'project-modal'}
        project={selectedProject}
        open={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />



      {/* Lightbox Modal */}
      {lightboxIndex !== null && data.galleryImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={closeLightbox} />

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition cursor-pointer"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Counter badge */}
          <span className="absolute top-6 left-6 z-10 text-white/70 text-xs font-mono">
            {lightboxIndex + 1} / {data.galleryImages.length}
          </span>

          {/* Image */}
          <div className="relative z-10 w-[min(90vw,1200px)] h-[min(85vh,900px)]">
            <Image
              src={data.galleryImages[lightboxIndex]}
              alt={`Gallery image ${lightboxIndex + 1}`}
              fill
              priority
              className="object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}