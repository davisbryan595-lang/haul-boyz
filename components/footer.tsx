import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Haul Boyz Junk Removal" width={40} height={40} className="rounded-lg" />
              <div>
                <h3 className="text-xl font-bold">Haul Boyz</h3>
                <p className="text-sm opacity-90">Junk Removal</p>
              </div>
            </div>
            <p className="text-sm opacity-90 text-pretty">
              Professional junk removal services in Hamilton City, Indianapolis. We clear it all with eco-friendly
              disposal practices.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+17652279408" className="hover:opacity-80 transition-opacity">
                  +1 765-227-9408
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:haulboyzjunk24@gmail.com" className="hover:opacity-80 transition-opacity">
                  haulboyzjunk24@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>Hamilton City, Indianapolis</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="grid grid-cols-2 gap-2 text-sm opacity-90">
              <div>Appliances Removal</div>
              <div>Gutter Cleanout</div>
              <div>Home Cleanout</div>
              <div>Garage Cleanout</div>
              <div>Scrap Pickup</div>
              <div>Yard Cleanup</div>
              <div>Junk Removal</div>
              <div>Construction Debris</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center space-y-6">
          <p className="text-sm opacity-90">
            © 2024 Haul Boyz Junk Removal. All rights reserved. | We Clear It All!
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
