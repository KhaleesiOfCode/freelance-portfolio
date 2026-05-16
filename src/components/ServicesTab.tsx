"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

interface Service {
  title: string;
  description: string;
}

export default function ServicesTab() {
  const { t, tt } = useLanguage();

  const items = tt("services.items") as unknown as Service[];

  return (
    <div>
      <Reveal>
        <h2 className="text-3xl font-bold text-cream mb-4">
          {t("services.title")}
        </h2>
        <p className="text-cream/70 leading-relaxed mb-8 max-w-3xl">
          {t("services.description")}
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/[0.08] transition-colors">
              <h3 className="text-lg font-semibold text-cream mb-2">
                {item.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
