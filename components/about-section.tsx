"use client"

import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground mb-4 text-pretty">
              Hello, everyone! We are a family business that has been servicing Sheridan, Indiana and the surrounding
              areas for almost a year now!
            </p>
            <p className="text-lg text-muted-foreground mb-4 text-pretty">
              <span className="font-semibold">Anthony</span> is the face of the operation—interacting with clients and
              handling all the physical demands—while <span className="font-semibold">Elizabeth</span> manages the
              behind-the-scenes, orchestrating advertisements, media platforms, and designs.
            </p>
            <p className="text-lg text-muted-foreground mb-4 text-pretty">
              The purpose and motivation behind why we do it all? <span className="font-semibold">Our son!</span> We
              created this business to support our family and build a legacy to pass down. In celebration of him turning
              one this month, we’re excited to share we are offering <span className="font-semibold">20% off your next
              purchase!</span>
            </p>
          </div>

          {/* Right Side - Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="glass-effect border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Family-Owned</h3>
                <p className="text-sm text-muted-foreground">
                  Built with love, dedication, and the goal of leaving a legacy for our son.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-effect border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Proudly serving Sheridan, Indiana and surrounding areas with care.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-effect border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hardworking & Reliable</h3>
                <p className="text-sm text-muted-foreground">
                  Anthony leads the front lines, ensuring every client is satisfied.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-effect border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Creative & Organized</h3>
                <p className="text-sm text-muted-foreground">
                  Elizabeth keeps everything running smoothly online, from ads to design.
                </p>
              </CardContent>
            </Card>
            {/* Optional 5th Card */}
            {/* <Card className="glass-effect border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  We dispose responsibly, keeping the community and environment clean.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  )
}
