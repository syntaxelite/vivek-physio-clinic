import Link from "next/link";

import { appointmentHref, clinic } from "@/data/clinic";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#f2f5f8] px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-[#d8e1eb] bg-[#fbfcfd] shadow-[0_24px_80px_rgba(35,54,74,0.05)]">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#213a57] p-8 text-slate-50 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8e1eb]">
              Visit us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
              {clinic.name}
            </h2>

            <div className="mt-8 space-y-5 text-base text-slate-200">
              <address className="not-italic">
                {clinic.location.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="font-medium text-[#eff4fa]">{clinic.phoneDisplay}</p>
              <p className="text-sm uppercase tracking-[0.18em] text-[#d8e1eb]">Open · Closes 9 PM</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#d8e1eb] bg-[#f2f5f8] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#355d8a]">
                  Call now
                </p>
                <Link
                  href={clinic.phoneHref}
                  className="mt-4 inline-block text-xl font-semibold tracking-[-0.04em] text-slate-900 underline-offset-4 hover:underline"
                >
                  {clinic.phoneDisplay}
                </Link>
              </div>

              <div className="rounded-[1.5rem] border border-[#d8e1eb] bg-[#e8eef4] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#355d8a]">
                  Directions
                </p>
                <Link
                  href={clinic.directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-lg font-semibold tracking-[-0.04em] text-slate-900 underline-offset-4 hover:underline"
                >
                  Get Directions
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[#d8e1eb] bg-[#f2f5f8] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#355d8a]">
                Booking
              </p>
              <Link
                href={appointmentHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-[#355d8a] px-5 py-3 text-sm font-semibold text-slate-50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#294a70] active:translate-y-px"
              >
                Book an Appointment
              </Link>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#d8e1eb] bg-[#f2f5f8]">
              <iframe
                src={clinic.mapsEmbedUrl}
                title={`Map for ${clinic.name}`}
                className="aspect-[4/3] w-full border-0 sm:aspect-[16/9] lg:aspect-[4/3]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
