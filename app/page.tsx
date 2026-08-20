import SiteNavbar from "@/components/site-navbar"
import HeroSection from "@/components/hero-section"
import SponsorsMarquee from "@/components/sponsors-marquee"
import AboutSection from "@/components/about-section"
import StatsCounter from "@/components/stats-counter"
//import RoadshowSection from "@/components/roadshow-section (<RoadshowSection />) "
import EventHighlights from "@/components/event-highlights"
import PartnersSection from "@/components/partners-section"
import FloorPlanSection from "@/components/floor-plan-section"
import AppPromoSection from "@/components/app-promo-section"
import SponsorSection from "@/components/sponsor-section"
import SiteFooter from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SiteNavbar />
      <HeroSection />
      <SponsorsMarquee />
      <AboutSection />
      <StatsCounter />

      <EventHighlights />
      <PartnersSection />
      <FloorPlanSection />
      <AppPromoSection />
      <SponsorSection />
      <SiteFooter />
    </main>
  )
}
