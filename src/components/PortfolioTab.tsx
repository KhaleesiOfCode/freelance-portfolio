"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

interface Project {
  title: string;
  description: string;
  tags: string[];
  features: string[];
}

export default function PortfolioTab() {
  const { t, tt } = useLanguage();

  const projects = tt("portfolio.projects") as unknown as Project[];

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
              <div className="aspect-video bg-dark-teal/30 flex items-center justify-center">
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
                    href="#"
                    className="flex-1 text-center bg-gold text-dark-teal px-4 py-2.5 rounded-full font-medium text-sm hover:bg-[#c4a02f] transition-colors"
                  >
                    {t("portfolio.viewDemo")}
                  </a>
                  <a
                    href="#"
                    className="flex-1 text-center border border-white/20 text-cream/80 px-4 py-2.5 rounded-full font-medium text-sm hover:bg-white/5 transition-colors"
                  >
                    {t("portfolio.viewCaseStudy")}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
