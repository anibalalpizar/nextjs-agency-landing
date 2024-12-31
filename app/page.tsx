import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/footer/footer"
import { HeroSection } from "@/components/hero-section"
import { ClientsSection } from "@/components/clients-section"
import { FeaturesSection } from "@/components/features-section"
import { PixelgradeSection } from "@/components/pixelgrade-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { MarketingSection } from "@/components/marketing-section"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ClientsSection />
        <FeaturesSection />
        <PixelgradeSection />
        <TestimonialSection />
        <MarketingSection />
      </main>
      <Footer />
    </>
  )
}
