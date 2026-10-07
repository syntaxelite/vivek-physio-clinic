import { AppointmentCta } from "@/components/appointment-cta";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ServiceGrid } from "@/components/service-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TeamPlaceholder } from "@/components/team-placeholder";
import { WhyVivek } from "@/components/why-vivek";
import { serviceGroups, whyVivek } from "@/data/clinic";

export default function Home() {
  return (
    <div className="bg-[#f2f5f8] text-slate-800">
      <SiteHeader />

      <main>
        <HeroSection />

        <ServiceGrid
          id="services"
          eyebrow="Physiotherapy care"
          title="Support for pain relief, recovery, and everyday movement."
          description="Every treatment plan is shaped around your comfort, mobility, and long-term healing goals."
          groups={serviceGroups}
          accent="sage"
        />

        <WhyVivek points={whyVivek} />
        <TeamPlaceholder />
        <ReviewsSection />
        <AppointmentCta />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
