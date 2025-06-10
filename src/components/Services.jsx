import { Home, Hammer, Palette, TreePine } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Custom Home Design",
    description:
      "Tailored architectural designs that reflect your lifestyle and preferences with modern aesthetics.",
  },
  {
    icon: Hammer,
    title: "Construction",
    description:
      "Expert construction services using premium materials and skilled craftsmen for lasting quality.",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description:
      "Complete interior solutions from concept to completion, creating spaces that inspire daily living.",
  },
  {
    icon: TreePine,
    title: "Landscaping",
    description:
      "Beautiful outdoor spaces that complement your home with sustainable and low-maintenance designs.",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Bringing new life to
            <br className="hidden sm:block" />
            home building
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="text-center group p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 rounded-2xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <Icon className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
