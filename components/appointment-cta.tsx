import { AppointmentLink } from "@/components/appointment-link";

export function AppointmentCta() {
  return (
    <section className="bg-[#f2f5f8] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#213a57] px-6 py-10 text-slate-50 shadow-[0_28px_80px_rgba(33,58,87,0.16)] md:px-10 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8e1eb]">
              Care starts here
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
              Ready to move with less pain and more confidence?
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <AppointmentLink variant="inverse" />
          </div>
        </div>
      </div>
    </section>
  );
}
