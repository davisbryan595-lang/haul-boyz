"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      feedback:
        "Haul Boyz made my garage cleanout so easy! They arrived on time, worked quickly, and were super friendly.",
      rating: 5,
    },
    {
      name: "James R.",
      feedback:
        "Excellent service! Anthony and his team handled everything with professionalism. Highly recommend them!",
      rating: 5,
    },
    {
      name: "Laura K.",
      feedback:
        "We used Haul Boyz for a yard cleanup and couldn’t be happier. They went above and beyond our expectations.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We’re proud to serve our community and even prouder of the feedback we receive from our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-effect border-border/50 shadow-lg">
              <CardContent className="p-6 flex flex-col h-full justify-between">
                <p className="text-muted-foreground mb-4">"{testimonial.feedback}"</p>
                <div>
                  <div className="flex text-yellow-500 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
