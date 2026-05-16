"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
