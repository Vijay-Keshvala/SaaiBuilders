import React from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import {
  Home,
  Hammer,
  Palette,
  TreePine,
  Wrench,
  Shield,
  CheckCircle,
} from "lucide-react"

const services = [
    {
      icon: Hammer,
      title: "New Home Construction",
      description: "Complete construction services from foundation to finishing touches.",
      features: ["Foundation & Framing", "Electrical & Plumbing", "Roofing & Siding", "Final Inspections"],
      image: "/images/house.jpg?fit=crop&w=400&h=300&q=80",
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Complete interior solutions from concept to completion.",
      features: ["Color Consultation", "Furniture Selection", "Lighting Design", "Custom Millwork"],
      image: "https://www.wedezinestudio.com/blogs/wp-content/uploads/2024/07/Ume-LV-1.4-scaled.webp?fit=crop&w=400&h=300&q=80",
    },
    {
      icon: TreePine,
      title: "Landscaping",
      description: "Beautiful outdoor spaces that complement your home.",
      features: ["Garden Design", "Hardscape Installation", "Irrigation Systems", "Outdoor Living Spaces"],
      image: "/images/land.PNG?fit=crop&w=400&h=300&q=80",
    },
    {
      icon: Shield,
      title: "Project Management",
      description: "Comprehensive project oversight ensuring quality and timeline adherence.",
      features: ["Timeline Management", "Quality Control", "Budget Oversight", "Client Communication"],
      image: "/images/project.JPG?fit=crop&w=400&h=300&q=80",
    },
  ]
  

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We meet to discuss your vision, budget, and timeline for your project.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Our team creates detailed plans and 3D renderings for your approval.",
  },
  {
    step: "03",
    title: "Permits & Approvals",
    description: "We handle all necessary permits and regulatory approvals for your project.",
  },
  {
    step: "04",
    title: "Construction",
    description: "Expert construction with regular updates and quality checkpoints.",
  },
  {
    step: "05",
    title: "Final Walkthrough",
    description: "Complete inspection and handover of your finished project.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              From initial design concepts to final construction, we offer comprehensive services to bring your dream home to life. Our experienced team handles every aspect of your project with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative h-full w-full">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
            
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your project is completed on time, within budget, and to your exact specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-emerald-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-emerald-200 -translate-x-1/3"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-emerald-800"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
