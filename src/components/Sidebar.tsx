"use client";

import { useState } from "react";

const contactInfo = [
  {
    label: "Email",
    value: "nivesathiyapal@gmail.com",
    href: "mailto:nivesathiyapal@gmail.com",
  },
  {
    label: "Phone",
    value: "+39 353 485 4161",
    href: "tel:+393534854161",
  },
  {
    label: "Location",
    value: "Bolzano, Italy",
    href: null,
  },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <div className="flex flex-col items-center text-center h-full py-10 px-6">
      <div className="w-28 h-28 rounded-full bg-dark-teal/60 border-2 border-gold/40 flex items-center justify-center mb-5 shadow-lg shadow-gold/10">
        <span className="text-3xl font-bold text-gold tracking-wider">SN</span>
      </div>

      <h1 className="text-2xl font-bold text-cream">Studio Nives</h1>
      <p className="text-gold text-sm font-medium mt-1">Website Creator</p>

      <div className="w-full border-t border-white/10 my-6" />

      <div className="w-full space-y-4 text-left">
        {contactInfo.map((item) => (
          <div key={item.label}>
            <p className="text-xs text-muted uppercase tracking-wider mb-0.5">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="text-sm text-cream/80 hover:text-gold transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-sm text-cream/80">{item.value}</p>
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
        Chat on WhatsApp
      </a>
    </div>
  );

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-dark-teal/80 backdrop-blur-xl border-b border-white/10 px-4 h-16 flex items-center justify-between">
        <span className="text-gold font-bold text-lg tracking-wide">
          Studio Nives
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-cream p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)}>
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
