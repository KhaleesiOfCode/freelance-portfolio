"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { locales, localeLabels } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

const contactInfo = [
  {
    labelKey: "sidebar.email",
    value: "nivesathiyapal@gmail.com",
    href: "mailto:nivesathiyapal@gmail.com",
  },
  {
    labelKey: "sidebar.phone",
    value: "+39 353 485 4161",
    href: "tel:+393534854161",
  },
  {
    labelKey: "sidebar.location",
    valueKey: "sidebar.locationValue",
    href: null,
  },
];

export default function Sidebar() {
  const { t, locale, setLocale } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <div className="flex flex-col items-center text-center h-full py-10 px-6">
      <div className="w-28 h-28 rounded-full bg-dark-teal/60 border-2 border-gold/40 mb-5 shadow-lg shadow-gold/10 overflow-hidden relative">
        <Image
          src="/images/studio-logo.png"
          alt="Studio Nives"
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-2xl font-bold text-cream">{t("sidebar.title")}</h1>
      <p className="text-gold text-sm font-medium mt-1">
        Web, AI &amp; Digital Tools
      </p>

      <div className="w-full border-t border-white/10 my-6" />

      <div className="w-full space-y-4 text-left">
        {contactInfo.map((item) => (
          <div key={item.labelKey}>
            <p className="text-xs text-muted uppercase tracking-wider mb-0.5">
              {t(item.labelKey)}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="text-sm text-cream/80 hover:text-gold transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-sm text-cream/80">
                {item.valueKey ? t(item.valueKey) : item.value}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="w-full border-t border-white/10 my-6" />

      <a
        href="https://wa.me/393534854161"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gold text-dark-teal font-semibold py-2.5 rounded-full text-sm hover:bg-[#c4a02f] transition-colors shadow-md text-center"
      >
        {t("sidebar.whatsapp")}
      </a>

      <div className="mt-auto pt-6">
        <div className="flex gap-1.5 justify-center">
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
  );

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-dark-teal/80 backdrop-blur-xl border-b border-white/10 px-4 h-16 flex items-center justify-between">
        <span className="text-gold font-bold text-lg tracking-wide">
          {t("sidebar.title")}
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-cream p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-72 bg-dark-teal/95 backdrop-blur-xl border-r border-white/10 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 bg-dark-teal/20 backdrop-blur-xl border-r border-white/10 overflow-y-auto">
        {sidebarContent}
      </aside>
    </>
  );
}
