import { Card } from "@/components/ui/card"

const services = [
  {
    title: "Appliances Removal",
    description: "Safe removal and disposal of old appliances including refrigerators, washers, dryers, and more.",
  },
  {
    title: "Gutter Cleanout",
    description: "Complete gutter cleaning and debris removal to keep your home protected from water damage.",
  },
  {
    title: "Home Cleanout",
    description: "Full home cleanouts for moving, downsizing, or estate clearing with careful handling of belongings.",
  },
  {
    title: "Garage Cleanout",
    description: "Reclaim your garage space with our comprehensive garage cleanout and organization services.",
  },
  {
    title: "Scrap Pickup",
    description: "Metal scrap collection and recycling services for construction debris and old metal items.",
  },
  {
    title: "Yard Cleanup",
    description: "Seasonal yard cleanup, brush removal, and landscaping debris disposal services.",
  },
  {
    title: "Junk Removal",
    description: "General junk removal for furniture, electronics, and household items you no longer need.",
  },
  {
    title: "Construction Debris",
    description: "Safe removal of construction waste, renovation debris, and building materials.",
  },
]

// map specific services to different image numbers
const imageMap: Record<number, number> = {
  7: 10, // 7th service uses 10.jpg
  8: 11, // 8th service uses 11.jpg
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From single items to complete cleanouts, we handle all your junk removal needs with professionalism and care
            for the environment.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const imageNumber = imageMap[index + 1] || index + 1
            return (
              <Card
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg h-[280px] cursor-pointer"
                style={{
                  backgroundImage: `url(/servicespics/${imageNumber}.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 transition-transform duration-300 group-hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-200">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Choose Haul Boyz?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Satisfaction Guaranteed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Available Service</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Eco</div>
                <p className="text-muted-foreground">Friendly Disposal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
