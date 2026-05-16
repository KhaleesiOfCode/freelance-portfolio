"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function AboutTab() {
  const { t, tt } = useLanguage();

  const steps = tt("about.steps") as unknown as {
    title: string;
    description: string;
  }[];
  const reasons = tt("about.reasons") as unknown as {
    title: string;
    description: string;
  }[];

  return (
    <div>
      <Reveal>
        <h2 className="text-3xl font-bold text-cream mb-4">
          {t("about.title")}
        </h2>
        <p className="text-cream/70 leading-relaxed mb-8 max-w-3xl">
          {t("about.description")}
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h3 className="text-xl font-semibold text-cream mb-6">
          {t("about.howItWorksTitle")}
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:bg-white/[0.08] transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-gold/20 text-gold text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <h4 className="text-gold font-semibold">{step.title}</h4>
              </div>
              <p className="text-cream/60 text-sm leading-relaxed ml-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <h3 className="text-xl font-semibold text-cream mb-6">
          {t("about.whyMeTitle")}
        </h3>

        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:bg-white/[0.08] transition-colors"
            >
              <h4 className="text-gold font-semibold mb-1.5">
                {reason.title}
              </h4>
              <p className="text-cream/60 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
