"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { locales, localeLabels } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import AboutTab from "./AboutTab";
import PortfolioTab from "./PortfolioTab";
import ServicesTab from "./ServicesTab";
import ContactTab from "./ContactTab";

const tabKeys = ["about", "portfolio", "packages", "contact"] as const;

export default function MainContent() {
  const { t, tt, locale, setLocale } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("about");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const idx = tabKeys.indexOf(activeTab as (typeof tabKeys)[number]);
    const el = tabRefs.current[idx];
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-dark-teal/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 h-16 flex items-center justify-between">
        <span className="text-gold font-bold text-lg tracking-wide">
          {t("sidebar.title")}
        </span>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l as Locale)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  locale === l
                    ? "bg-gold text-dark-teal"
                    : "bg-white/5 text-cream/50 hover:text-cream/80 border border-white/10"
                }`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-16">
        {/* Hero section */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-cream">
            {t("sidebar.title")}
          </h1>
          <p className="text-gold text-base sm:text-lg font-medium mt-2">
            {t("sidebar.subtitle")}
          </p>
          <p className="text-cream/60 text-sm leading-relaxed mt-4 max-w-2xl whitespace-pre-line">
            {t("sidebar.description")}
          </p>

          {/* Hero CTA buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={() => setActiveTab("packages")}
              className="bg-gold text-dark-teal px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#c4a02f] transition-colors shadow-md"
            >
              View Website Packages
            </button>
            <a
              href="https://wa.me/393534854161"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-cream/80 px-6 py-3 rounded-full font-medium text-sm hover:bg-white/5 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="mailto:nivesathiyapal@gmail.com"
              className="inline-flex items-center gap-2 text-xs text-cream/70 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:text-gold hover:border-gold/30 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              nivesathiyapal@gmail.com
            </a>
            <a
              href="tel:+393534854161"
              className="inline-flex items-center gap-2 text-xs text-cream/70 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:text-gold hover:border-gold/30 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +39 353 485 4161
            </a>
            <span className="inline-flex items-center gap-2 text-xs text-cream/50 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Bolzano, Italy
            </span>
            <a
              href="https://wa.me/393534854161"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-dark-teal bg-gold px-4 py-2 rounded-full hover:bg-[#c4a02f] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              {t("sidebar.whatsapp")}
            </a>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-1 mb-10 border-b border-white/10 relative">
          {tabKeys.map((key, idx) => (
            <button
              key={key}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-3 text-sm font-medium transition-colors ${
                activeTab === key
                  ? "text-gold"
                  : "text-cream/50 hover:text-cream/80"
              }`}
            >
              {t(`nav.${key}`)}
            </button>
          ))}
          <span
            className="absolute bottom-0 h-0.5 bg-gold rounded-full transition-all duration-300 ease-out"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />
        </div>

        {/* Tab content */}
        <div key={`${activeTab}-${locale}`} className="animate-[fadeIn_0.3s_ease-in-out]">
          {activeTab === "about" && (
            <>
              <AboutTab />
              {/* See projects CTA */}
              <div className="text-center mt-12 mb-4">
                <button
                  onClick={() => setActiveTab("portfolio")}
                  className="bg-gold text-dark-teal px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#c4a02f] transition-colors shadow-md"
                >
                  See Example Projects
                </button>
              </div>
              <div className="mt-16" />
              <ServicesTab />
              {/* Free review CTA */}
              <div className="text-center mt-12">
                <button
                  onClick={() => setActiveTab("contact")}
                  className="border border-white/20 text-cream/80 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/5 transition-colors"
                >
                  Request a Free Website Review
                </button>
              </div>
            </>
          )}
          {activeTab === "portfolio" && <PortfolioTab />}
          {activeTab === "packages" && (
            <>
              {/* How It Works */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cream mb-8">
                  {t("howItWorks.title")}
                </h2>
                <div className="grid gap-6 md:grid-cols-4">
                  {(tt("howItWorks.steps") as unknown as { title: string; description: string }[]).map((step, i) => (
                    <div key={step.title} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold/20 text-gold text-lg font-bold mb-4">
                        {i + 1}
                      </span>
                      <h3 className="text-gold font-semibold mb-2">{step.title}</h3>
                      <p className="text-cream/60 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Packages */}
              <section>
                <h2 className="text-3xl font-bold text-cream mb-4">
                  {t("packages.title")}
                </h2>
                <p className="text-cream/70 leading-relaxed mb-8 max-w-3xl">
                  {t("packages.description")}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  {(tt("packages.items") as unknown as {
                    name: string;
                    bestFor: string;
                    includes: string[];
                    price: string;
                  }[]).map((pkg) => (
                    <div
                      key={pkg.name}
                      className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 transition-all duration-300 basis-72 flex-1 max-w-sm flex flex-col"
                    >
                      <h3 className="text-xl font-semibold text-cream mb-1">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-cream/40 mb-4 italic">
                        {pkg.bestFor}
                      </p>
                      <ul className="space-y-2 mb-6 flex-1">
                        {pkg.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-cream/60"
                          >
                            <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-2xl font-bold text-gold mb-6">
                        {pkg.price}
                      </p>
                      <a
                        href="https://wa.me/393534854161"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-gold text-dark-teal px-4 py-3 rounded-full font-semibold text-sm hover:bg-[#c4a02f] transition-colors shadow-md"
                      >
                        {t("packages.cta")}
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
          {activeTab === "contact" && <ContactTab />}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-sm text-cream/30">
          &copy; {new Date().getFullYear()} Nivetha Sathiyapal.{" "}
          {t("footer.copyright")}
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-gold text-dark-teal shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#c4a02f] hover:-translate-y-1 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
