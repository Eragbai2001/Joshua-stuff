import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Plane, Users, Briefcase, Ambulance, Car } from 'lucide-react'

const services = [
  {
    title: 'Private Jet Charter',
    description: 'Tailored to your schedule and needs, our private jet charters provide an unmatched blend of luxury, privacy, and comfort. Our modern fleet ensures a seamless journey to your destination.',
    image: '/placeholder.svg?height=400&width=600',
    icon: Plane
  },
  {
    title: 'Group & Corporate Charters',
    description: 'Redefine team travel with our group and corporate charter solutions. From executive retreats to large-scale events, we provide efficient, luxurious transportation for groups of all sizes.',
    image: '/placeholder.svg?height=400&width=600',
    icon: Users
  },
  {
    title: 'Premium Concierge',
    description: 'Beyond transportation, our premium concierge service elevates your experience with personalized itineraries, exclusive access to events, and round-the-clock support for your every need.',
    image: '/placeholder.svg?height=400&width=600',
    icon: Briefcase
  },
  {
    title: 'Air Ambulance',
    description: 'In emergencies, rely on our air ambulance service for swift and secure medical transportation. Equipped with cutting-edge medical facilities, we ensure the highest level of care for every patient.',
    image: '/placeholder.svg?height=400&width=600',
    icon: Ambulance
  },
  {
    title: 'Luxury Car Rental',
    description: 'Complete your travel experience with our premium car rental service. Choose from a curated selection of high-end vehicles to travel in style and comfort.',
    image: '/placeholder.svg?height=400&width=600',
    icon: Car
  }
]

export function ServicesGrid() {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground dark:text-foreground">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden transition-transform duration-300 hover:scale-105 h-full">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <service.icon className="w-6 h-6 mr-2 text-muted-foreground" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">{service.description}</p>
                <Link href="/quote">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors">
                    Get a Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
