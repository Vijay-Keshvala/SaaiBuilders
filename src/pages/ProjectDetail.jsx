"use client"
import { Link } from "react-router-dom" 
import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import {
  MapPin,
  Download,
  Phone,
  Mail,
  Car,
  Wifi,
  Shield,
  Dumbbell,
  Trees,
  Waves,
  ChevronLeft,
  ChevronRight,
  Play,
  Calculator,
  Calendar,
} from "lucide-react"

export default function ProjectDetailPage({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500 hover:bg-green-600"
      case "ongoing":
        return "bg-orange-500 hover:bg-orange-600"
      case "upcoming":
        return "bg-blue-500 hover:bg-blue-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  const amenityIcons = [
    { name: "Smart Home Technology", icon: Wifi },
    { name: "Security System", icon: Shield },
    { name: "Garage Parking", icon: Car },
    { name: "Fitness Center", icon: Dumbbell },
    { name: "Landscaped Gardens", icon: Trees },
    { name: "Swimming Pool", icon: Waves },
  ]
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Project Header */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
                <Badge className={`text-white ${getStatusBadgeColor(project.status)}`}>
                  {project.status === "completed"
                    ? "Completed"
                    : project.status === "ongoing"
                      ? "In Progress"
                      : "Upcoming"}
                </Badge>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{project.location}</span>
              </div>
              <div className="text-lg text-emerald-600 font-semibold">{project.type}</div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
              <Button className="bg-emerald-800 hover:bg-emerald-900">
                <Phone className="mr-2 h-4 w-4" />
                Contact Builder
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <img
                src={project.gallery[currentImageIndex]?.url || "/placeholder.svg"}
                alt={project.gallery[currentImageIndex]?.caption || project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Virtual Tour Button */}
              <div className="absolute bottom-4 left-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Play className="mr-2 h-4 w-4" />
                  Virtual Tour
                </Button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.gallery.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {project.gallery.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    index === currentImageIndex ? "border-emerald-600" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="floor-plans">Floor Plans</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{project.longDescription}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Project Highlights</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            {project.features.slice(0, 6).map((feature, index) => (
                              <li key={index}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Construction Team</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Contractor: {project.specifications.contractor}</li>
                            <li>• Architecture: {project.specifications.architecture}</li>
                            {project.specifications.interiorDesigner && (
                              <li>• Interior Design: {project.specifications.interiorDesigner}</li>
                            )}
                            {project.specifications.landscapeDesigner && (
                              <li>• Landscape: {project.specifications.landscapeDesigner}</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="features" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Features & Amenities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {amenityIcons.map((amenity, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                              <amenity.icon className="h-5 w-5" />
                            </div>
                            <span className="font-medium">{amenity.name}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-3">Additional Features</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {project.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="floor-plans" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Floor Plans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {project.floorPlans ? (
                        <div className="space-y-4">
                          {project.floorPlans.map((plan, index) => (
                            <div key={plan.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex justify-between items-center mb-3">
                                <div>
                                  <h4 className="font-semibold text-lg">{plan.name}</h4>
                                  <p className="text-gray-600">{plan.description}</p>
                                </div>
                                <Button variant="outline" size="sm">
                                  View Plan
                                </Button>
                              </div>
                              <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                  src={plan.image || "/placeholder.svg"}
                                  alt={plan.name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">Floor plans will be available soon.</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="specifications" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Technical Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-700">Lot Size</span>
                          <span className="text-gray-600">{project.specifications.lotSize}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-700">Architecture Style</span>
                          <span className="text-gray-600">{project.specifications.architecture}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-700">General Contractor</span>
                          <span className="text-gray-600">{project.specifications.contractor}</span>
                        </div>
                        {project.specifications.yearBuilt && (
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-700">Year Built</span>
                            <span className="text-gray-600">{project.specifications.yearBuilt}</span>
                          </div>
                        )}
                        {project.specifications.interiorDesigner && (
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-700">Interior Designer</span>
                            <span className="text-gray-600">{project.specifications.interiorDesigner}</span>
                          </div>
                        )}
                        {project.specifications.landscapeDesigner && (
                          <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                            <span className="font-medium text-gray-700">Landscape Designer</span>
                            <span className="text-gray-600">{project.specifications.landscapeDesigner}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">{project.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bedrooms:</span>
                    <span className="font-medium">{project.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bathrooms:</span>
                    <span className="font-medium">{project.bathrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Square Feet:</span>
                    <span className="font-medium">{project.sqft.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge className={`text-white ${getStatusBadgeColor(project.status)}`}>
                      {project.status === "completed"
                        ? "Completed"
                        : project.status === "ongoing"
                          ? "In Progress"
                          : "Upcoming"}
                    </Badge>
                  </div>
                  {project.completedDate && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completed:</span>
                      <span className="font-medium">{project.completedDate}</span>
                    </div>
                  )}
                  {project.progress && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Progress:</span>
                      <span className="font-medium">{project.progress}</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Get More Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-emerald-800 hover:bg-emerald-900">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Builder
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Inquiry
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Visit
                  </Button>
                </CardContent>
              </Card>

              {/* Cost Calculator */}
              <Card>
                <CardHeader>
                  <CardTitle>Cost Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Get an estimate for a similar custom home</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/cost-calculator">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate Cost
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Client Testimonial */}
              {project.client && (
                <Card>
                  <CardHeader>
                    <CardTitle>Client Testimonial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-sm text-gray-600 italic mb-3">
                      "{project.client.testimonial}"
                    </blockquote>
                    <cite className="text-emerald-800 font-medium">— {project.client.name}</cite>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}