import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every project, ensuring the highest quality standards.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to bring their vision to life through partnership.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Delivering projects on time and within budget, every single time.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through honest communication and transparent business practices.",
  },
];

const team = [
  {
    name: "Rajshibhai Keshvala",
    role: "Property Dealer",
    image: "/images/rajshi.JPG?height=30&width=30",
    bio: "Handles land deals and investments for new construction projects.",
},
  {
    name: "Ghanshyambhai Patel",
    role: "Head of Construction",
    image: "/images/ghanshyam.PNG?height=300&width=300",
    bio: "Leads and manages all on-site construction activities.",
  },
  {
    name: "Haribhai Chaudhary",
    role: "Legal Executive",
    image: "/images/haribhai.PNG?height=300&width=300",
    bio: "Manages legal documents, agreements, and property registrations.",
  },
  {
    name: "Brijbhai Patel",
    role: "Architect Engineer",
    image: "https://img.freepik.com/free-photo/happy-bearded-man-business-clothes-looking-camera_171337-11392.jpg?height=300&width=300",
    bio: "Designs functional and aesthetic architectural plans.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Building Dreams Since 1999</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              For over two decades, BuildCorp has been at the forefront of residential construction, creating
              exceptional homes that stand the test of time. Our commitment to quality, innovation, and customer
              satisfaction has made us the trusted choice for homeowners across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                BuildCorp was founded in 1999 by John Mitchell, a master craftsman with a passion for creating
                beautiful, sustainable homes. What started as a small family business has grown into one of the region's
                most respected construction companies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey has been marked by continuous innovation, from adopting green building practices to
                incorporating smart home technology. We've built over 500 homes, each one a testament to our commitment
                to excellence and our clients' dreams.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-emerald-800 mb-2">500+</div>
                  <div className="text-gray-600">Homes Built</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-800 mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/we.JPG?height=500&width=600"
                alt="BuildCorp founder"
                width={600}
                height={500}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from initial consultation to final walkthrough.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-emerald-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced team of professionals brings together decades of expertise in construction, design, and
              project management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <div className="relative h-64">
                  <img src={member.image || ""} alt={member.name} fill     className="w-full h-full object-cover rounded-t-xl"
 />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream Home?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Start Your Project
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
  );
}
