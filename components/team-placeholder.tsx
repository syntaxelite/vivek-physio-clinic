import { clinic } from "@/data/clinic";

export function TeamPlaceholder() {
  return (
    <section className="bg-[#f2f5f8] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-[#d8e1eb] bg-[#fbfcfd] p-6 shadow-[0_24px_80px_rgba(35,54,74,0.05)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-[1.8rem] border border-[#d8e1eb] bg-[#e8eef4] p-3">
            <div
              role="img"
              className="aspect-[4/3] rounded-[1.4rem] bg-cover bg-center"
              style={{ backgroundImage: `url('${clinic.featurePortrait}')` }}
              aria-label="Physiotherapist guiding a patient in rehabilitation"
            />
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#42668f]">
              Meet Dr. Vivek
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-900 md:text-5xl">
              {clinic.title}
            </h2>
            <p className="mt-4 text-lg font-medium text-slate-700">{clinic.doctorName}</p>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
              Dr. Vivek supports patients with tailored physiotherapy plans focused on pain reduction, mobility, recovery, and long-term comfort through everyday movement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
