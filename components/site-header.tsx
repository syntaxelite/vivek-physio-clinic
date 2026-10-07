"use client";

import Link from "next/link";
import { useState } from "react";

import { AppointmentLink } from "@/components/appointment-link";
import { clinic, navigation } from "@/data/clinic";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#d8e1eb] bg-[#f2f5f8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#home" className="flex items-center gap-3" aria-label={clinic.name}>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#355d8a] text-sm font-semibold text-slate-50 shadow-sm">
              V
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#42668f]">
                Vivek
              </p>
              <p className="text-xs font-semibold leading-tight text-slate-900 sm:text-sm">
                Physio Clinic
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <AppointmentLink />
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#cbd6e1] bg-[#fbfcfd]/80 p-2 text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#355d8a] lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 rounded-full bg-slate-800 transition ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 rounded-full bg-slate-800 transition ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 rounded-full bg-slate-800 transition ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        <div
          id="mobile-navigation"
          hidden={!mobileOpen}
          className="border-t border-[#d8e1eb] bg-[#f2f5f8]/95 lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#355d8a]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="fixed inset-x-4 bottom-4 z-[60] lg:hidden">
        <div className="w-full [&>a]:w-full">
          <AppointmentLink />
        </div>
      </div>
    </>
  );
}
