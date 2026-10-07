export function FeaturedTreatments({
  items,
}: {
  items: { name: string; description: string; image: string }[];
}) {
  return (
    <section className="bg-[#edf1f5] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#42668f]">
            Featured treatments
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-900 md:text-5xl">
            Care that feels tailored to the way you live.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fbfcfd] shadow-[0_18px_40px_rgba(35,54,74,0.04)] transition-transform hover:-translate-y-1"
            >
              <div
                role="img"
                aria-label={item.name}
                className="aspect-[4/3] bg-[#e6ecf2] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="space-y-4 p-6">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                  {item.name}
                </h3>
                <p className="text-base leading-7 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
