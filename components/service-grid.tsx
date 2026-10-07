import { SectionHeading } from "@/components/section-heading";

export type ServiceGroup = {
  title: string;
  items: string[];
};

type ServiceGridProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  groups: ServiceGroup[];
  accent?: "sage" | "warm";
};

export function ServiceGrid({
  id = "services",
  eyebrow,
  title,
  description,
  groups,
  accent = "sage",
}: ServiceGridProps) {
  const shellClass = accent === "warm" ? "bg-[#edf1f5]" : "bg-[#e8eef4]";

  return (
    <section id={id} className={`${shellClass} px-4 py-20 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="rounded-[2rem] border border-[#d8e1eb] bg-[#fbfcfd]/85 p-6 shadow-[0_18px_40px_rgba(35,54,74,0.05)]">
              <h3 className="text-xl font-semibold text-slate-900">{group.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-slate-100 pb-2 last:border-b-0 last:pb-0">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#355d8a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
