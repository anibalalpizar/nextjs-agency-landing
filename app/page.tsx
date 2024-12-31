import { Navigation } from "@/components/ui/navigation"
import { HeroSection } from "@/components/hero-section"
import { ClientsSection } from "@/components/clients-section"
import { FeaturesSection } from "@/components/features-section"
import { PixelgradeSection } from "@/components/pixelgrade-section"
import { TestimonialSection } from "@/components/testimonial-section"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <PixelgradeSection />
      <TestimonialSection />
    </main>
  )
}
