import Link from "next/link";

import { clinic } from "@/data/clinic";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f2f5f8] px-4 pb-16 pt-10 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(53,93,138,0.14),_transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#42668f]">
              Physiotherapy in Erode
            </p>
            <h1 className="text-4xl font-semibold tracking-[-0.07em] text-slate-900 sm:text-5xl lg:text-[4rem]">
              Move Better. Live Better.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 md:text-lg">
              Personalized physiotherapy, rehabilitation, and movement care that helps you recover with comfort, confidence, and lasting support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="tel:+918270909816"
                className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#355d8a] px-5 py-3 text-sm font-semibold text-slate-50 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#294a70] active:translate-y-px"
              >
                Book an Appointment
              </Link>
              <Link
                href="tel:+918270909816"
                className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border border-[#cbd6e1] bg-[#fbfcfd] px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                Call the Clinic
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2 rounded-full border border-[#d8e1eb] bg-[#fbfcfd]/80 px-3 py-2 shadow-sm">
                <span className="text-base text-[#355d8a]">★</span>
                <span className="font-semibold text-slate-800">{clinic.googleRating}</span>
              </div>
              <span className="font-medium">{clinic.reviewCount}</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <Link
                href={clinic.directionsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d8e1eb] bg-[#e8eef4] px-4 py-2 font-medium text-[#355d8a] transition-colors hover:bg-[#dde7f1]"
              >
                Get Directions
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#d8e1eb] bg-[#fbfcfd] p-3 shadow-[0_26px_80px_rgba(35,54,74,0.08)]">
              <div
                role="img"
                className="aspect-[4/5] min-h-[360px] rounded-[1.5rem] bg-[#e6ecf2] bg-cover bg-center lg:min-h-[520px]"
                style={{ backgroundImage: `url('${clinic.heroImage}')` }}
                aria-label="Physiotherapist helping a patient with rehabilitation exercise"
              />
              <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-[#d8e1eb] bg-[#fbfcfd]/95 p-4 shadow-lg backdrop-blur-sm">
                <p className="text-sm font-semibold text-slate-900">
                  Recovery-focused care, built around movement and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
