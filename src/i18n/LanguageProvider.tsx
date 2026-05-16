"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import type { Locale } from "./config";
import { defaultLocale } from "./config";
import en from "./en.json";
import de from "./de.json";
import it from "./it.json";

const translations: Record<Locale, Record<string, unknown>> = {
  en,
  de,
  it,
};

type TranslationValue = string | string[] | Record<string, unknown>;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tt: (key: string) => TranslationValue;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function resolveValue(
  obj: Record<string, unknown>,
  key: string
): TranslationValue {
  const keys = key.split(".");
  let value: unknown = obj;
  for (const k of keys) {
    if (value == null || typeof value !== "object") return key;
    const index = Number(k);
    if (Number.isInteger(index) && Array.isArray(value)) {
      value = value[index];
    } else {
      value = (value as Record<string, unknown>)[k];
    }
  }
  if (typeof value === "string" || Array.isArray(value)) return value;
  return key;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const t = useCallback(
    (key: string): string => {
      const result = resolveValue(translations[locale], key);
      return typeof result === "string" ? result : key;
    },
    [locale]
  );

  const tt = useCallback(
    (key: string): TranslationValue => {
      return resolveValue(translations[locale], key);
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, tt }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
