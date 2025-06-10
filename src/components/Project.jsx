import React, { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

// Dummy image import fallback for React (replace with your actual image handling)
const placeholderImage = "/images/hero.jpg"

const projects = {
  completed: [
    {
      id: 1,
      title: "Luxury Villa Estate",
      location: "Beverly Hills, CA",
      image: placeholderImage,
      completedDate: "2024",
      description: "5-bedroom luxury villa with modern amenities",
    },
    {
      id: 2,
      title: "Modern Family Home",
      location: "Austin, TX",
      image: placeholderImage,
      completedDate: "2024",
      description: "Contemporary 4-bedroom family residence",
    },
    {
      id: 3,
      title: "Eco-Friendly Townhouse",
      location: "Portland, OR",
      image: placeholderImage,
      completedDate: "2023",
      description: "Sustainable 3-bedroom townhouse design",
    },
  ],
  ongoing: [
    {
      id: 4,
      title: "Waterfront Mansion",
      location: "Miami, FL",
      image: placeholderImage,
      progress: "75%",
      description: "6-bedroom waterfront luxury home",
    },
    {
      id: 5,
      title: "Mountain Retreat",
      location: "Aspen, CO",
      image: placeholderImage,
      progress: "45%",
      description: "4-bedroom mountain cabin with panoramic views",
    },
  ],
  upcoming: [
    {
      id: 6,
      title: "Urban Loft Complex",
      location: "New York, NY",
      image: placeholderImage,
      startDate: "Q2 2024",
      description: "Modern loft-style residential complex",
    },
    {
      id: 7,
      title: "Suburban Community",
      location: "Phoenix, AZ",
      image: placeholderImage,
      startDate: "Q3 2024",
      description: "25-home planned community development",
    },
  ],
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("completed")

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Recent Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Our Project Portfolio</h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={activeTab === "completed" ? "default" : "outline"}
              onClick={() => setActiveTab("completed")}
              className={
                activeTab === "completed"
                  ? "bg-emerald-800 hover:bg-emerald-900 text-white"
                  : "text-emerald-800 border-emerald-800 hover:bg-emerald-800 hover:text-white"
              }
            >
              Completed Projects
            </Button>
            <Button
              variant={activeTab === "ongoing" ? "default" : "outline"}
              onClick={() => setActiveTab("ongoing")}
              className={
                activeTab === "ongoing"
                  ? "bg-emerald-800 hover:bg-emerald-900 text-white"
                  : "text-emerald-800 border-emerald-800 hover:bg-emerald-800 hover:text-white"
              }
            >
              Ongoing Projects
            </Button>
            <Button
              variant={activeTab === "upcoming" ? "default" : "outline"}
              onClick={() => setActiveTab("upcoming")}
              className={
                activeTab === "upcoming"
                  ? "bg-emerald-800 hover:bg-emerald-900 text-white"
                  : "text-emerald-800 border-emerald-800 hover:bg-emerald-800 hover:text-white"
              }
            >
              Upcoming Projects
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab].map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || placeholderImage}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                {activeTab === "ongoing" && project.progress && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.progress} Complete
                  </div>
                )}
                {activeTab === "upcoming" && project.startDate && (
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Starting {project.startDate}
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {activeTab === "completed" && project.completedDate && (
                  <div className="flex items-center text-emerald-600 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Completed in {project.completedDate}</span>
                  </div>
                )}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-emerald-800 group-hover:text-white group-hover:border-emerald-800 transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
