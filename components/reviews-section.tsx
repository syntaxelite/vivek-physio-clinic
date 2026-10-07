import { clinic, reviewSnippets } from "@/data/clinic";

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#e8eef4] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#42668f]">
            Reviews
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-900 md:text-5xl">
            {clinic.googleRating}
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-700">{clinic.reviewCount}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviewSnippets.map((snippet) => (
            <article
              key={snippet}
              className="rounded-[2rem] border border-[#d8e1eb] bg-[#fbfcfd] p-6 shadow-[0_18px_40px_rgba(35,54,74,0.05)]"
            >
              <div className="mb-4 flex items-center gap-1 text-base text-[#355d8a]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={`${snippet}-${index}`}>★</span>
                ))}
              </div>
              <p className="text-base leading-7 text-slate-700">“{snippet}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
