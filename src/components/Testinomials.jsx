import React from "react"
import { Card, CardContent } from "./ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "BuildCorp exceeded our expectations in every way. The attention to detail and quality of craftsmanship is outstanding. Our dream home became a reality thanks to their expertise.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Working with BuildCorp on our residential project was seamless. Their professionalism, timeline adherence, and quality delivery made them our go-to construction partner.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Interior Designer",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The collaboration with BuildCorp was exceptional. They understood our vision and brought it to life with precision. The end result speaks for itself - absolutely stunning.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-emerald-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-700 text-emerald-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">What our clients say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-emerald-700 border-emerald-600 text-white">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="mt-5 w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-emerald-100 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                    <img
                      src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-emerald-200">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full opacity-10 -translate-y-32 -translate-x-32"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-600 rounded-full opacity-20 translate-y-24 translate-x-24"></div>
    </section>
  )
}
