"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

interface Project {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  images: string[];
  demoUrl: string;
  caseStudyUrl: string;
}

export default function PortfolioTab() {
  const { t, tt } = useLanguage();

  const projects = tt("portfolio.projects") as unknown as Project[];
  const [imageIndex, setImageIndex] = useState<Record<number, number>>({});

  const currentImage = (projectIndex: number, images: string[]) => {
    const idx = imageIndex[projectIndex] ?? 0;
    return images.length > 0 ? images[idx] : null;
  };

  const prevImage = (projectIndex: number, images: string[]) => {
    setImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] ?? 0) - 1 + images.length) % images.length,
    }));
  };

  const nextImage = (projectIndex: number, images: string[]) => {
    setImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] ?? 0) + 1) % images.length,
    }));
  };

  return (
    <div>
      <Reveal>
        <h2 className="text-3xl font-bold text-cream mb-4">
          {t("portfolio.title")}
        </h2>
        <p className="text-cream/70 leading-relaxed mb-8 max-w-3xl">
          {t("portfolio.description")}
        </p>
      </Reveal>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:bg-white/[0.08] transition-colors">
              <div className="relative overflow-hidden group h-72 md:h-96 bg-dark-teal/30">
                {currentImage(i, project.images) ? (
                  <>
                    <Image
                      src={currentImage(i, project.images)!}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                    />
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(i, project.images)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                          aria-label="Previous image"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                          onClick={() => nextImage(i, project.images)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                          aria-label="Next image"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {project.images.map((_, imgIdx) => (
                            <button
                              key={imgIdx}
                              onClick={() => setImageIndex((prev) => ({ ...prev, [i]: imgIdx }))}
                              className={`w-1.5 h-1.5 rounded-full transition-all ${
                                (imageIndex[i] ?? 0) === imgIdx
                                  ? "bg-gold w-3"
                                  : "bg-cream/40 hover:bg-cream/60"
                              }`}
                              aria-label={`Go to image ${imgIdx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 mx-auto text-gold/30 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-gold/40 text-sm font-medium">
                        {t("portfolio.screenshot")}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-cream mb-3">
                  {project.title}
                </h3>
                <p className="text-cream/60 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-cream/60"
                    >
                      <svg
                        className="w-4 h-4 text-gold mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <a
                    href={project.demoUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gold text-dark-teal px-4 py-2.5 rounded-full font-medium text-sm hover:bg-[#c4a02f] transition-colors"
                  >
                    {t("portfolio.viewDemo")}
                  </a>
                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center border border-white/20 text-cream/80 px-4 py-2.5 rounded-full font-medium text-sm hover:bg-white/5 transition-colors"
                    >
                      {t("portfolio.viewCaseStudy")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
