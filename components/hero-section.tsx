"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/servicespics/14.jpg)" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full floating-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Haul Boyz
            <span className="block text-3xl md:text-5xl font-normal mt-2">Junk Removal</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">We Clear It All!</p>

          <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto text-pretty">
            Professional junk removal services in Hamilton City, Indianapolis. Fast, reliable, and eco-friendly disposal
            solutions for your home or business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>

            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto bg-transparent"
            >
              Our Services
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToServices}
              className="animate-bounce text-white/70 hover:text-white transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
