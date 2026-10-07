type WhyVivekProps = {
  points: string[];
};

export function WhyVivek({ points }: WhyVivekProps) {
  return (
    <section id="about" className="bg-[#e9eef3] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#42668f]">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-900 md:text-5xl">
              Personalized care for movement, recovery, and confidence.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              At Vivek Physio Clinic, treatment is designed around your pain pattern, movement needs, and rehabilitation goals, with a calm, individual approach to recovery.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="rounded-[1.75rem] border border-[#d8e1eb] bg-[#fbfcfd] p-5 shadow-[0_18px_30px_rgba(35,54,74,0.05)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#355d8a] text-sm font-semibold text-slate-50">
                  ✓
                </div>
                <p className="text-base leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
