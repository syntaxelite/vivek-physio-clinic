import Link from "next/link";

import { clinic, navigation } from "@/data/clinic";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d8e1eb] bg-[#edf1f5] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#42668f]">
            {clinic.name}
          </p>
          <p className="mt-2 text-sm font-medium text-slate-700">{clinic.doctorName}</p>
          <address className="mt-2 max-w-md text-sm leading-7 text-slate-600 not-italic">
            Erode, Tamil Nadu
          </address>
          <p className="mt-2 text-sm text-slate-600">{clinic.phoneDisplay}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="transition-colors hover:text-slate-900">
              {item.label}
            </Link>
          ))}
          <Link
            href={clinic.phoneHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#355d8a] px-4 py-2.5 text-sm font-semibold text-slate-50 transition-all duration-200 hover:bg-[#294a70]"
          >
            Book an Appointment
          </Link>
          <Link
            href={clinic.directionsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#cbd6e1] bg-[#fbfcfd] px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            Get Directions
          </Link>
        </div>
      </div>
    </footer>
  );
}
