import { Card, CardContent } from "@/components/ui/card"
import { Trash2, Home, Car, Wrench, Leaf, Package, Building, Recycle } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Appliances Removal",
    description: "Safe removal and disposal of old appliances including refrigerators, washers, dryers, and more.",
  },
  {
    icon: Building,
    title: "Gutter Cleanout",
    description: "Complete gutter cleaning and debris removal to keep your home protected from water damage.",
  },
  {
    icon: Home,
    title: "Home Cleanout",
    description: "Full home cleanouts for moving, downsizing, or estate clearing with careful handling of belongings.",
  },
  {
    icon: Car,
    title: "Garage Cleanout",
    description: "Reclaim your garage space with our comprehensive garage cleanout and organization services.",
  },
  {
    icon: Recycle,
    title: "Scrap Pickup",
    description: "Metal scrap collection and recycling services for construction debris and old metal items.",
  },
  {
    icon: Leaf,
    title: "Yard Cleanup",
    description: "Seasonal yard cleanup, brush removal, and landscaping debris disposal services.",
  },
  {
    icon: Trash2,
    title: "Junk Removal",
    description: "General junk removal for furniture, electronics, and household items you no longer need.",
  },
  {
    icon: Package,
    title: "Construction Debris",
    description: "Safe removal of construction waste, renovation debris, and building materials.",
  },
]

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 glass-effect border-border/50"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-balance">{service.title}</h3>
                <p className="text-muted-foreground text-pretty">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

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
