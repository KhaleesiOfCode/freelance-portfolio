"use client";

import { useState } from "react";
import AboutTab from "./AboutTab";
import PortfolioTab from "./PortfolioTab";
import ServicesTab from "./ServicesTab";
import ContactTab from "./ContactTab";

const tabs = [
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function MainContent() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="flex-1 min-h-screen lg:ml-72 pt-16 lg:pt-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-16">
        {/* Tab navigation */}
        <div className="flex gap-1 mb-10 border-b border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-gold"
                  : "text-cream/50 hover:text-cream/80"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="animate-[fadeIn_0.3s_ease-in-out]">
          {activeTab === "about" && <AboutTab />}
          {activeTab === "portfolio" && <PortfolioTab />}
          {activeTab === "services" && <ServicesTab />}
          {activeTab === "contact" && <ContactTab />}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-sm text-cream/30">
          &copy; {new Date().getFullYear()} Studio Nives. All rights reserved.
        </div>
      </div>
    </div>
  );
}
