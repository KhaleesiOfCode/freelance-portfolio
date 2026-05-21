"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function AboutTab() {
  const { t, tt } = useLanguage();

  const whatIBuild = tt("about.whatIBuild") as unknown as {
    title: string;
    description: string;
  }[];
  const whyItWorks = tt("about.whyItWorks") as unknown as {
    title: string;
    description: string;
  }[];

  return (
    <div>
      <Reveal>
        <h2 className="text-3xl font-bold text-cream mb-4">
          {t("about.title")}
        </h2>
        <p className="text-cream/70 leading-relaxed mb-8 max-w-3xl whitespace-pre-line">
          {t("about.description")}
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h3 className="text-xl font-semibold text-cream mb-6">
          {t("about.whatIBuildTitle")}
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {whatIBuild.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 hover:bg-white/[0.08] transition-all duration-300 basis-72 flex-1 max-w-md"
            >
              <h4 className="text-gold font-semibold mb-1.5">{item.title}</h4>
              <p className="text-cream/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <h3 className="text-xl font-semibold text-cream mb-6">
          {t("about.whyItWorksTitle")}
        </h3>

        <div className="flex flex-wrap justify-center gap-5">
          {whyItWorks.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 hover:bg-white/[0.08] transition-all duration-300 basis-72 flex-1 max-w-md"
            >
              <h4 className="text-gold font-semibold mb-1.5">{item.title}</h4>
              <p className="text-cream/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
