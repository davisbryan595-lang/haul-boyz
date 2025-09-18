import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section" // ✅ new import
import { ContactSection } from "@/components/contact-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection /> {/* ✅ new About Us section */}
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
