import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Search, MapPin, Calendar, Home, ArrowRight } from "lucide-react";

const allProjects = [
  {
    id: 1,
    title: "Luxury Villa Estate",
    location: "Beverly Hills, CA",
    type: "Luxury Villa",
    status: "completed",
    image: "/images/hero.jpg",
    completedDate: "2024",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    description: "Stunning 5-bedroom luxury villa featuring modern amenities and panoramic city views.",
  },
  {
    id: 2,
    title: "Modern Family Home",
    location: "Austin, TX",
    type: "Family Home",
    status: "completed",
    image: "/images/hero.jpg",
    completedDate: "2024",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    description: "Contemporary family residence with open floor plan and energy-efficient features.",
  },
  {
    id: 3,
    title: "Eco-Friendly Townhouse",
    location: "Portland, OR",
    type: "Townhouse",
    status: "completed",
    image: "/images/hero.jpg",
    completedDate: "2023",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2400,
    description: "Sustainable townhouse design with solar panels and green building materials.",
  },
  {
    id: 4,
    title: "Waterfront Mansion",
    location: "Miami, FL",
    type: "Mansion",
    status: "ongoing",
    image: "/images/hero.jpg",
    progress: "75%",
    bedrooms: 6,
    bathrooms: 5,
    sqft: 6000,
    description: "Luxurious waterfront mansion with private dock and infinity pool.",
  },
  {
    id: 5,
    title: "Mountain Retreat",
    location: "Aspen, CO",
    type: "Cabin",
    status: "ongoing",
    image: "/images/hero.jpg",
    progress: "45%",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3800,
    description: "Mountain cabin with panoramic views and luxury amenities.",
  },
  {
    id: 6,
    title: "Urban Loft Complex",
    location: "New York, NY",
    type: "Loft",
    status: "upcoming",
    image: "/images/hero.jpg",
    startDate: "Q2 2024",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    description: "Modern loft-style residential complex in the heart of the city.",
  },
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    const matchesType = typeFilter === "all" || project.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const projectTypes = [...new Set(allProjects.map((p) => p.type))];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Project Portfolio</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Explore our diverse collection of residential projects, from luxury estates to sustainable family homes.
              Each project represents our commitment to excellence and innovation in home construction.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex gap-4 w-full lg:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="ongoing">Ongoing</option>
                <option value="upcoming">Upcoming</option>
              </select>

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">All Types</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "completed"
                          ? "bg-green-500 text-white"
                          : project.status === "ongoing"
                          ? "bg-orange-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      {project.status === "completed"
                        ? "Completed"
                        : project.status === "ongoing"
                        ? `${project.progress} Complete`
                        : `Starting ${project.startDate}`}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Home className="w-4 h-4 mr-1" />
                      {project.bedrooms} bed
                    </div>
                    <div>{project.bathrooms} bath</div>
                    <div>{project.sqft.toLocaleString()} sqft</div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                  {project.status === "completed" && project.completedDate && (
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>


    </div>
  );
}
