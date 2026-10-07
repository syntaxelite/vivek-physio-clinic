import Link from "next/link";

import { appointmentHref } from "@/data/clinic";

type AppointmentLinkProps = {
  variant?: "primary" | "inverse";
};

export function AppointmentLink({ variant = "primary" }: AppointmentLinkProps) {
  const appearance =
    variant === "inverse"
      ? "bg-[#edf2f7] text-[#23364a] hover:bg-[#fbfcfd] focus-visible:outline-white"
      : "bg-[#355d8a] text-slate-50 shadow-sm hover:bg-[#294a70] focus-visible:outline-[#355d8a]";

  return (
    <Link
      href={appointmentHref}
      className={`inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${appearance}`}
    >
      Book an Appointment
    </Link>
  );
}
